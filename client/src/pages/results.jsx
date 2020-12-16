import React, { useState } from "react"

import Trophy from "../images/trophy.inline.svg"

const Results = ({ ...props }) => {
  const results = {
    _id: "hedf73",
    players: {
      "47834br4j": {
        username: "thomas",
        pages: [
          {
            url: "https://wikipedia.org/Barack_Obama",
            timestamp: 34879022434,
          },
          {
            url: "https://wikipedia.org/Kamala_Harris",
            timestamp: 34879022954,
          },
        ],
      },
      "34879njfefg34": {
        username: "sarah",
        pages: [
          {
            url: "https://wikipedia.org/Barack_Obama",
            timestamp: 34879022434,
          },
          {
            url: "https://wikipedia.org/US_Vice_President",
            timestamp: 34879022954,
          },
        ],
      },
    },
    start: "https://wikipedia.org/Barack_Obama",
    target: "https://wikipedia.org/Kamala_Harris",
    winner: "47834br4j",
  }
  const [players, setPlayers] = useState([])

  const winner = results.players[results.winner]

  const averageTime = player => {
    const timestamps = player.pages.map(page => page.timestamp)
    const timeDifferences = []
    timestamps.forEach(
      (el, index) =>
        index > 0 && timeDifferences.push(el - timestamps[index - 1])
    )
    return (
      timeDifferences.reduce((sum, el) => sum + el, 0) / timeDifferences.length
    )
  }

  const totalTime = player => {
    const timestamps = player.pages.map(page => page.timestamp)
    return (timestamps[timestamps.length - 1] - timestamps[0]) / 1000
  }
  console.log(totalTime(results.players[results.winner]))

  return (
    <>
      <div className="pt-12 bg-gray-50 sm:pt-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Trophy className="text-gray-500 w-12 h-12" />
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {winner.username.charAt(0).toUpperCase() +
                winner.username.slice(1)}{" "}
              won!
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Nice try, better luck next time!
            </p>
          </div>
        </div>
        <div className="pb-12 mt-10 bg-white sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-50"></div>
            <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <dl className="bg-white rounded-lg shadow-lg sm:grid sm:grid-cols-3">
                  <div className="flex flex-col p-6 text-center border-b border-gray-100 sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                      pages visited
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                      {winner.pages.length}
                    </dd>
                  </div>
                  <div className="flex flex-col p-6 text-center border-t border-b border-gray-100 sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                      avg. seconds/page
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                      3.6
                    </dd>
                  </div>
                  <div className="flex flex-col p-6 text-center border-t border-gray-100 sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                      total seconds
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                      20.4
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Results
