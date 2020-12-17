import React, { useState, useEffect } from "react"

import Trophy from "../images/trophy.inline.svg"

const Results = ({ ...props }) => {
  const results = {
    _id: "hedf73",
    players: {
      "47834br4j": {
        username: "thomas",
        pages: [
          {
            url: "https://wikipedia.org/wiki/Barack_Obama",
            timestamp: 34879022434,
          },
          {
            url: "https://wikipedia.org/wiki/Kamala_Harris",
            timestamp: 34879022954,
          },
        ],
      },
      "34879njfefg34": {
        username: "sarah",
        pages: [
          {
            url: "https://wikipedia.org/wiki/Barack_Obama",
            timestamp: 34879022434,
          },
          {
            url: "https://wikipedia.org/wiki/US_Vice_President",
            timestamp: 34879022964,
          },
          {
            url: "https://wikipedia.org/wiki/Kamala_Harris",
            timestamp: 34879023084,
          },
        ],
      },
    },
    start: "https://wikipedia.org/Barack_Obama",
    target: "https://wikipedia.org/Kamala_Harris",
    winner: "47834br4j",
  }

  const [players, setPlayers] = useState([])
  const [displayedPlayer, setDisplayedPlayer] = useState()

  const winner = results.players[results.winner]

  useEffect(() => {
    setDisplayedPlayer(winner)
  }, [])

  if (!displayedPlayer) return null

  const getName = player =>
    player.username.charAt(0).toUpperCase() + player.username.slice(1)

  const getTimeDifferences = player => {
    const timestamps = player.pages.map(page => page.timestamp)
    const timeDifferences = []
    timestamps.forEach(
      (el, index) =>
        index > 0 && timeDifferences.push(el - timestamps[index - 1])
    )
    return timeDifferences
  }

  const averageTime = player => {
    const timeDifferences = getTimeDifferences(player)
    return (
      timeDifferences.reduce((sum, el) => sum + el, 0) /
      timeDifferences.length /
      1000
    )
  }

  const getTime = (player, page) => {
    const timeDifferences = getTimeDifferences(player)
    return timeDifferences.length > page
      ? `${timeDifferences[page] / 1000}s`
      : "-"
  }

  const totalTime = player => {
    const timestamps = player.pages.map(page => page.timestamp)
    return (timestamps[timestamps.length - 1] - timestamps[0]) / 1000
  }

  return (
    displayedPlayer && (
      <>
        <section className="bg-gray-50 sm:pt-16 pt-12">
          <div className="max-w-7xl sm:px-6 lg:px-8 px-4 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <Trophy className="w-16 h-16 mx-auto mb-3 text-gray-900 fill-current" />
              <h2 className="sm:text-4xl text-3xl font-extrabold text-gray-900">
                {getName(winner)} won!
              </h2>
              <p className="sm:mt-4 mt-3 text-xl text-gray-500">
                Nice try, better luck next time!
              </p>
            </div>
          </div>
          <div className="sm:pb-16 pb-12 mt-10 bg-white">
            <div className="relative">
              <div className="h-1/2 bg-gray-50 absolute inset-0"></div>
              <div className="max-w-7xl sm:px-6 lg:px-8 relative px-4 mx-auto">
                <div className="max-w-4xl mx-auto">
                  <dl className="sm:grid sm:grid-cols-3 bg-white rounded-lg shadow-lg">
                    <div className="sm:border-0 sm:border-r flex flex-col p-6 text-center border-b border-gray-100">
                      <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                        pages visited
                      </dt>
                      <dd className="order-1 text-5xl font-extrabold text-blue-500">
                        {displayedPlayer.pages.length}
                      </dd>
                    </div>
                    <div className="sm:border-0 sm:border-l sm:border-r flex flex-col p-6 text-center border-t border-b border-gray-100">
                      <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                        avg. seconds/page
                      </dt>
                      <dd className="order-1 text-5xl font-extrabold text-blue-500">
                        {averageTime(displayedPlayer)}
                      </dd>
                    </div>
                    <div className="sm:border-0 sm:border-l flex flex-col p-6 text-center border-t border-gray-100">
                      <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                        total seconds
                      </dt>
                      <dd className="order-1 text-5xl font-extrabold text-blue-500">
                        {totalTime(displayedPlayer)}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sm:px-4 lg:px-8 container px-4 mx-auto">
          <div className="mb-4">
            <div className="sm:hidden">
              <label htmlFor="tabs" className="sr-only">
                Select a player
              </label>
              <select
                id="tabs"
                name="tabs"
                className="focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md"
              >
                {Object.keys(results.players).map((key, index) => (
                  <option key={index}>{getName(results.players[key])}</option>
                ))}
              </select>
            </div>
            <div className="sm:block hidden">
              <nav className="flex space-x-4" aria-label="Tabs">
                {Object.keys(results.players).map((key, index) => (
                  <a
                    href="#"
                    key={index}
                    className={`hover:text-gray-700 px-3 py-2 text-sm font-medium text-gray-500 rounded-md ${
                      displayedPlayer.username ===
                        results.players[key].username && "text-blue-500"
                    }`}
                    onClick={() => setDisplayedPlayer(results.players[key])}
                  >
                    {getName(results.players[key])}
                  </a>
                ))}
              </nav>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="sm:-mx-6 lg:-mx-8 -my-2 overflow-x-auto">
              <div className="sm:px-6 lg:px-8 inline-block min-w-full py-2 align-middle">
                <div className="sm:rounded-lg overflow-hidden border-b border-gray-200 shadow">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                        >
                          Page
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                        >
                          Time
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {displayedPlayer &&
                        displayedPlayer.pages &&
                        displayedPlayer.pages.map((page, key) => (
                          <tr key={key} className="bg-white">
                            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                              {page.url.split("/").pop().replaceAll("_", " ")}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                              {getTime(displayedPlayer, key)}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-right">
                              <a
                                href={page.url}
                                className="hover:text-blue-900 text-blue-600"
                              >
                                View
                              </a>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  )
}

export default Results
