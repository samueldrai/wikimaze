import React, { useEffect, useState } from "react"
import axios from "axios"

const Game = ({ ...props }) => {
  const [wikiPage, setWikiPage] = useState()
  useEffect(() => {
    axios
      .get("https://en.wikipedia.org/api/rest_v1/page/html/Barack_Obama")
      .then(response => setWikiPage(response.data))
      .catch(e => console.log(e))
  }, [])

  useEffect(() => {
    document.querySelector("body").addEventListener("click", event => {
      event.preventDefault()
      console.log(String(event.target))
    })
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
