import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import axios from "axios"

const Game = ({ ...props }) => {
  const [wikiPage, setWikiPage] = useState()
  const [currentUrl, setCurrentUrl] = useState("Barack_Obama")
  const wikiUrl = "https://en.wikipedia.org/api/rest_v1/page/html/"

  useEffect(() => {
    axios
      .get(`${wikiUrl}${currentUrl}`)
      .then(response => setWikiPage(response.data))
      .catch(e => console.log(e))
  }, [currentUrl])

  useEffect(() => {
    document.querySelector("body").addEventListener("click", event => {
      event.preventDefault()
      const target = String(event.target)
      if (target.includes("wikipedia.org")) {
        setCurrentUrl(target.split("/").pop())
      }
    })
  }, [])

  return (
    <>
      <Layout players={["a", "b", "c"]} wikiPage={wikiPage} />
    </>
  )
}

export default Game
