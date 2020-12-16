import eventlet
import socketio
import requests
import operator


sio = socketio.Server(cors_allowed_origins="*")
app = socketio.WSGIApp(
    sio, static_files={"/": {"content_type": "text/html", "filename": "index.html"}}
)

games = {}
user_games = {}


@sio.event
def connect(sid, environ):
    print("connect ", sid)


@sio.on("create_room")
def create_room(sid, data):
    room_id = data["roomId"]
    sio.enter_room(sid, room_id)

    games[room_id] = {"players": {}}
    games[room_id]["players"][sid] = {"username": None}
    user_games[sid] = room_id

    prepare_game(room_id)

    print(f"> {sid} Entered room ", room_id)
    print("[After create_room] >> ", games)


@sio.on("join_room")
def join_room(sid, data):
    room_id = data["roomId"]
    sio.enter_room(sid, room_id)

    games[room_id]["players"][sid] = {"username": None}

    print(f"> {sid} Entered room ", room_id)
    print("[After join_room] >> ", games)


def prepare_game(room_id):
    links = []
    for i in range(10):
        wikipedia = "https://en.wikipedia.org/api/rest_v1/page/random/html"
        r = requests.get(wikipedia)
        links.append({"url": r.url, "length": len(r.text)})

    key = operator.itemgetter("length")
    links = sorted(links, key=key, reverse=True)

    games[room_id]["start"] = links[1]["url"]
    games[room_id]["target"] = links[0]["url"]


@sio.on("set_username")
def set_username(sid, data):
    room_id = data["roomId"]
    username = data["username"]
    games[room_id]["players"][sid] = {"username": username}
    print("[After set_username] >> ", games)


@sio.event
def disconnect(sid):
    if sid in user_games:
        room_id = user_games[sid]
        del games[room_id]

    print("> Disconnect ", sid)


if __name__ == "__main__":
    eventlet.wsgi.server(eventlet.listen(("", 5000)), app)
