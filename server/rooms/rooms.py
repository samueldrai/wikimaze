import ssl
import uuid
import pymongo

from datetime import datetime

password = "Q6bEOhK3iRYCubRyhaHZ"
key = f"mongodb+srv://root:{password}@wikimaze.y8dtq.mongodb.net/"
mongo_client = pymongo.MongoClient(key, ssl=True, ssl_cert_reqs=ssl.CERT_NONE)
col = mongo_client["wiki_maze"]["rooms"]


def create_room():
    room_id = str(uuid.uuid4()).split("-")[0]
    room_date = datetime.now()
    room = {"_id": room_id, "created_at": room_date}
    col.insert_one(room)


create_room()
