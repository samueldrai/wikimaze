import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import axios from "axios"

const Game = ({ ...props }) => {
  const [wikiPage, setWikiPage] = useState()
  const [currentUrl, setCurrentUrl] = useState("Barack_Obama")
  const wikiUrl = "https://en.wikipedia.org/api/rest_v1/page/html/"
  const realUrl = "http://en.wikipedia.org/wiki/"

  useEffect(() => {
    axios
      .get(`${wikiUrl}${currentUrl}`)
      .then(response => setWikiPage(response.data))
      .catch(e => console.log(e))
  }, [currentUrl])

  const handleClick = event => {
    const target = String(event.target)
    console.log(target)
    if (target.includes("wikipedia.org")) {
      setCurrentUrl(target.split("/").pop())
    }
  }

  return (
    <>
      <Layout
        players={["a", "b", "c"]}
        wikiPage={wikiPage}
        displayUrl={`${realUrl}${currentUrl}`}
        handleClick={handleClick}
      />
    </>
  )
}

export default Game
