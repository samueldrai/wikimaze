import React from "react"

const Layout = ({ players, wikiPage }) => (
  <div className="flex h-screen overflow-hidden bg-white">
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-80">
        <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto border-r border-gray-200">
          <div className="flex items-center flex-shrink-0 px-4">
            <span className="font-bold uppercase">Wikimaze</span>
          </div>
          <div className="flex flex-col flex-grow mt-5">
            <nav className="flex-1 px-2 space-y-1 bg-white">
              <div>
                <h3 className="font-extrabold">Players</h3>
                <div className="flex flex-col px-2">
                  {players.map(player => (
                    <span className="font-light">{player}</span>
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
                    className="block w-full transition duration-300 ease-in-out border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="https://wikimaze.io/1234"
                    value="https://wikimaze.io/1234"
                  />
                </div>
              </div>
              <button
                type="button"
                className="px-4 py-2 mt-2 text-sm font-medium text-center text-white transition duration-300 ease-in-out bg-indigo-600 border border-transparent rounded-sm shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Start Game!
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col flex-1 w-0 mx-auto md:px-8 xl:px-0">
      <div className="relative z-10 flex flex-shrink-0 h-16 px-4 bg-white border-b border-gray-200">
        <div className="flex justify-between flex-1 px-4 md:px-0">
          <div className="flex flex-1">
            <form className="flex w-full md:ml-0" action="#" method="GET">
              <label for="search_field" className="sr-only">
                Search
              </label>
              <div className="relative w-full text-gray-400 focus-within:text-gray-600">
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
                  className="block w-full h-full py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 border-transparent focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                  placeholder="Search"
                  type="text"
                  value="https://wikipedia.com/fr/barack_obama"
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
          <div className="px-4 sm:px-6 md:px-0">
            {wikiPage && (
              <div
                className="h-screen overflow-y-scroll wikipedia"
                dangerouslySetInnerHTML={{
                  __html: wikiPage,
                }}
              ></div>
            )}
          </div>
        </div>
      </main>
    </div>
  </div>
)

export default Layout
