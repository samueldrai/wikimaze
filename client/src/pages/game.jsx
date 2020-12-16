import React, { useEffect, useState } from "react"
import axios from "axios"

const Game = ({ ...props }) => {
  const [players, setPlayers] = useState(["a", "b", "c"])
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

  const iframeclick = () => {
    document.getElementById(
      "wikiIframe"
    ).contentWindow.document.body.onclick = event => {
      event.preventDefault()
      handleClick(event)
    }
  }

  return (
    <>
      <div className="flex h-screen overflow-hidden bg-white">
        <div className="md:flex md:flex-shrink-0 hidden">
          <div className="w-80 flex flex-col">
            <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto border-r border-gray-200">
              <div className="flex items-center flex-shrink-0 px-4">
                <span className="font-bold uppercase">Wikimaze</span>
              </div>
              <div className="flex flex-col flex-grow mt-5">
                <nav className="flex-1 px-2 space-y-1 bg-white">
                  <div>
                    <h3 className="font-extrabold">Players</h3>
                    <div className="flex flex-col px-2">
                      {players.map((player, idx) => (
                        <span className="font-light" key={idx}>
                          {player}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-2">
                    <h3 className="font-extrabold">Invite your friends</h3>
                    <div className="mt-1 mb-4">
                      <input
                        type="text"
                        name="gameUrl"
                        id="gameUrl"
                        className="focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm block w-full transition duration-300 ease-in-out border-gray-300 rounded-md shadow-sm"
                        placeholder="https://wikimaze.io/1234"
                        value="https://wikimaze.io/1234"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    className="hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 px-4 py-2 mt-2 text-sm font-medium text-center text-white transition duration-300 ease-in-out bg-indigo-600 border border-transparent rounded-sm shadow-sm"
                  >
                    Start Game!
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="md:px-8 xl:px-0 flex flex-col flex-1 w-0 mx-auto">
          <div className="relative z-10 flex flex-shrink-0 h-16 px-4 bg-white border-b border-gray-200">
            <div className="md:px-0 flex justify-between flex-1 px-4">
              <div className="flex flex-1">
                <form className="md:ml-0 flex w-full" action="#" method="GET">
                  <label for="search_field" className="sr-only">
                    Search
                  </label>
                  <div className="focus-within:text-gray-600 relative w-full text-gray-400">
                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      id="search_field"
                      className="focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm block w-full h-full py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 border-transparent"
                      placeholder="Search"
                      type="text"
                      value={`${realUrl}${currentUrl}`}
                      name="search"
                      disabled
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>

          <main className="relative flex-1">
            <div className="py-6">
              <div className="sm:px-6 md:px-0 px-4">
                {wikiPage && (
                  <div>
                    <iframe
                      srcDoc={wikiPage}
                      id="wikiIframe"
                      className="w-full h-screen"
                      onLoad={() => iframeclick()}
                    />
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default Game
