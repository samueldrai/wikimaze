import React, { useState } from "react"
import { Link } from "gatsby"

const IndexPage = () => {
  const [gameUrl, setGameUrl] = useState()

  return (
    <div>
      <header className="p-24 text-center bg-gray-200">
        <h1 className="text-4xl font-bold">Wikimaze</h1>
        <h2 className="mt-4 text-xl font-light text-sam">
          The ultimate wikipedia racing game!
        </h2>
      </header>
      <main className="container w-1/3 py-24 m-auto mt-4 border border-gray-200 rounded-md shadow-lg px-36">
        <div className="mb-6">
          <label
            htmlFor="game"
            className="block text-sm font-medium text-gray-700"
          >
            Join an existing game!
          </label>
          <div className="mt-1 mb-4">
            <input
              type="text"
              name="game"
              id="game"
              value={gameUrl}
              onChange={e => setGameUrl(e.target.value)}
              className="block w-full transition duration-300 ease-in-out border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="https://wikimaze.io/1234"
            />
          </div>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 mr-2 text-sm font-medium text-white transition duration-300 ease-in-out bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Join Game
          </button>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 transition duration-300 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create new game
          </button>
        </div>
      </main>
    </div>
  )
}

export default IndexPage
