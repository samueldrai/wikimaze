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
      <section className="bg-gray-50 sm:pt-16 pt-12">
        <div className="max-w-7xl sm:px-6 lg:px-8 px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Trophy className="w-16 h-16 mx-auto mb-3 text-gray-900 fill-current" />
            <h2 className="sm:text-4xl text-3xl font-extrabold text-gray-900">
              Thomas won!
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
                      {winner.pages.length}
                    </dd>
                  </div>
                  <div className="sm:border-0 sm:border-l sm:border-r flex flex-col p-6 text-center border-t border-b border-gray-100">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                      avg. seconds/page
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-blue-500">
                      3.6
                    </dd>
                  </div>
                  <div className="sm:border-0 sm:border-l flex flex-col p-6 text-center border-t border-gray-100">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                      total seconds
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-blue-500">
                      20.4
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
            <label for="tabs" className="sr-only">
              Select a player
            </label>
            <select
              id="tabs"
              name="tabs"
              className="focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md"
            >
              <option>Thomas</option>
              <option>Sarah</option>
              <option selected>Sam</option>
              <option>Ezio</option>
              <option>Nicolas</option>
            </select>
          </div>
          <div className="sm:block hidden">
            <nav className="flex space-x-4" aria-label="Tabs">
              <a
                href="#"
                className="hover:text-gray-700 px-3 py-2 text-sm font-medium text-gray-500 rounded-md"
              >
                Thomas
              </a>
              <a
                href="#"
                className="hover:text-gray-700 px-3 py-2 text-sm font-medium text-gray-500 rounded-md"
              >
                Sarah
              </a>
              <a
                href="#"
                className="px-3 py-2 text-sm font-medium text-blue-500 bg-blue-100 rounded-md"
                aria-current="page"
              >
                Sam
              </a>
              <a
                href="#"
                className="hover:text-gray-700 px-3 py-2 text-sm font-medium text-gray-500 rounded-md"
              >
                Ezio
              </a>
              <a
                href="#"
                className="hover:text-gray-700 px-3 py-2 text-sm font-medium text-gray-500 rounded-md"
              >
                Nicolas
              </a>
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
                    <tr className="bg-white">
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                        Kamala Harris
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        4.4s
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-right">
                        <a
                          href="#"
                          className="hover:text-blue-900 text-blue-600"
                        >
                          View
                        </a>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                        U.S. Vice President
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        3.2s
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-right">
                        <a
                          href="#"
                          className="hover:text-blue-900 text-blue-600"
                        >
                          View
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Results
