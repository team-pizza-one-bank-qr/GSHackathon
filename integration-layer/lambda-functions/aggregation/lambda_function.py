import json
import logging

import boto3

lambda_client = boto3.client("lambda")

logger = logging.getLogger()
logger.setLevel(logging.INFO)

clients_path = "/clients"
client_path = "/client"


def generate_response(code, success, data):
    return {
        "statusCode": code,
        "headers": {
            "Access-Control-Allow-Origin": "*",  # Required for CORS support to work
            "Access-Control-Allow-Credentials": True,  # Required for cookies, authorization headers with HTTPS
        },
        "body": json.dumps(dict(success=success, data=data)),
    }


def lambda_handler(event, context):
    logger.info(json.dumps(event))

    http_method = event["httpMethod"]
    path = event["path"]

    if path == clients_path and http_method == "GET":
        response = lambda_client.invoke(
            FunctionName="onebankqr-db-crud",
        )
        payload = json.loads(response["Payload"].read().decode("utf-8"))
        items = json.loads(payload["body"])["Items"]
        client_ids = [
            dict(client_id=client["client_id"], name=client["name"]) for client in items
        ]
        return generate_response(code=200, success=True, data=client_ids)

    if path == client_path and http_method == "GET":
        response = lambda_client.invoke(
            FunctionName="onebankqr-db-crud",
        )
        client_id = None
        params = event.get("queryStringParameters", None)
        if params is not None:
            client_id = params.get("client_id", None)
        if client_id is None:
            return generate_response(
                code=400, success=False, data="Client ID is missing or invalid!"
            )
        payload = json.loads(response["Payload"].read().decode("utf-8"))
        items = json.loads(payload["body"])["Items"]
        client = [client for client in items if client["client_id"] == client_id][0]
        return generate_response(code=200, success=True, data=client)

    return generate_response(code=400, success=False, data=f"Invalid request")
