import React, { useEffect, useState } from "react"
import openSocket from "socket.io-client";
import axios from "axios"

const Game = ({ ...props }) => {
  
  const [wikiPage, setWikiPage] = useState()
  const [nickname, setNickname] = useState("Ma couille joiner")

  // useEffect(() => {
  //   axios
  //     .get("https://en.wikipedia.org/api/rest_v1/page/html/Barack_Obama")
  //     .then(response => setWikiPage(response.data))
  //     .catch(e => console.log(e))
  // }, [])

  useEffect(() => {
    let search = window.location.pathname
    let params = search.split("/")[2]
    const socket = openSocket('http://34.244.216.179:5000');

    const previousState = window.history.state

    if (!previousState) {
      socket.on('connect', () => { 
        socket.emit("join_room", { roomId: params });
        socket.emit("set_username", { username: nickname, roomId: params });
      });
    }
  }, [])

  return (
    <>
      {wikiPage && (
        <div
          dangerouslySetInnerHTML={{
            __html: wikiPage,
          }}
        ></div>
      )}
      <p>Game {JSON.stringify(props["*"])}</p>
    </>
  )
}

export default Game
