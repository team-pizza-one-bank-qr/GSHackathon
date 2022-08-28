import json
import logging

logger = logging.getLogger()
logger.setLevel(logging.INFO)


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
    entity_id = None
    params = event.get("queryStringParameters", None)
    if params is not None:
        entity_id = params.get("entity_id", None)
    if entity_id is None:
        return generate_response(
            code=400, success=False, data="Entity_id ID is missing or invalid!"
        )
    return generate_response(code=200, success=True, data=dict(entity_id=entity_id))
