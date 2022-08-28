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


def get_all_client_ids():
    response = client_table.scan()
    return response


def lambda_handler(event, context):
    return {"statusCode": 200, "body": json.dumps(get_all_client_ids(), cls=SetEncoder)}
