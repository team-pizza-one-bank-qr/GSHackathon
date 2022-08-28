import json
import logging
from decimal import Decimal

import boto3

logger = logging.getLogger()
logger.setLevel(logging.INFO)

client_tablename = "client-data"
dynamodb = boto3.resource("dynamodb")
client_table = dynamodb.Table(client_tablename)


class SetEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, Decimal):
            return float(obj)
        if isinstance(obj, set):
            return list(obj)
        return json.JSONEncoder.default(self, obj)


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
    client_id = None
    business_id = None
    params = event.get("queryStringParameters", None)
    if params is not None:
        client_id = params.get("client_id", None)
        business_id = params.get("business_id", None)
    if client_id is None or business_id is None:
        return generate_response(
            code=400,
            success=False,
            data=f"Invalid request: required ids are missing or invalid!",
        )

    response = client_table.update_item(
        #     Key={'client_id':{'S':client_id}},
        #     UpdateExpression="SET approved_businesses :element",
        #     ExpressionAttributeValues={":element":{"SS":[business_id]}}
        # )
        Key={"client_id": client_id},
        UpdateExpression="SET approved_businesses :elements",
        ExpressionAttributeValues={":elements": business_id},
    )
    print(response)

    return generate_response(code=200, success=True, data=f"success!")
