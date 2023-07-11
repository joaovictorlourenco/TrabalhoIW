'use client'
import { useEffect, useState } from 'react'
import { useAPI } from '../api/useAPI'

type Quote = {
  id: number
  quote: String
  author: String
}
export default function QuotesList() {
  const { data: quotes } = useAPI<Quote[]>('https://dummyjson.com/quotes/')
  const [search, setSearch] = useState<string>('')
  const [filteredQuotes, setFilteredQuotes] = useState<Quote[]>([])

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
        className="h-10 w-96 rounded-xl border-none pl-3"
        name="search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <ul className="grid grid-cols-4 gap-2">
        {search.length > 0
          ? filteredQuotes.map((quote) => {
              return (
                <li
                  className="flex h-72 w-72 flex-col items-center justify-between justify-items-center rounded-md bg-white p-2"
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
                  className="flex h-72 w-72 flex-col items-center justify-between justify-items-center rounded-md bg-white p-2"
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
