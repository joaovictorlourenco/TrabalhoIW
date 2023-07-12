'use client'
import { useEffect, useState } from 'react'
import { useAPI } from '../api/useAPI'

type Quote = {
  id: number
  quote: String
  author: String
}

export default function QuotesList() {
  const { data } = useAPI('https://dummyjson.com/quotes/')
  const [search, setSearch] = useState<string>('')
  const [filteredQuotes, setFilteredQuotes] = useState<Quote[]>([])
  const quotes = data as Quote[]

  useEffect(() => {
    if (quotes) {
      const filteredQuotes = quotes.filter((quote) => {
        return quote.quote.toLowerCase().includes(search.toLowerCase())
      })
      setFilteredQuotes(filteredQuotes)
    }
  }, [search, quotes])

  return (
    <>
      <input
        type="text"
        placeholder="Digite o Conselhos"
        className="h-10 w-96 rounded-xl border-none pl-3 max-sm:w-64"
        name="search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <ul className="grid grid-cols-4 gap-2 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {search.length > 0
          ? filteredQuotes.map((quote) => {
              return (
                <li
                  className="flex h-72 w-72 flex-col items-center justify-between justify-items-center rounded-md bg-white p-2 shadow-lg"
                  key={quote.id}
                >
                  <p>{quote.id}</p>
                  <p>{quote.quote}</p>
                  <strong>{quote.author}</strong>
                </li>
              )
            })
          : quotes?.map((quote) => {
              return (
                <li
                  className="flex h-72 w-72 flex-col items-center justify-between justify-items-center rounded-md bg-white p-2 shadow-lg"
                  key={quote.id}
                >
                  <p>{quote.id}</p>
                  <p>{quote.quote}</p>
                  <strong>{quote.author}</strong>
                </li>
              )
            })}
      </ul>
    </>
  )
}
