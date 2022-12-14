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
    business_id = None
    params = event.get("queryStringParameters")
    if params is not None:
        business_id = params.get("business_id", None)
    if business_id is None:
        return generate_response(
            code=400, success=False, data="Business ID is missing or invalid!"
        )

    return generate_response(
        code=200,
        success=True,
        data=f"https://main.d17oe85yzyf5i1.amplifyapp.com/?business_id={business_id}",
    )
