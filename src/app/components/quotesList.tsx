'use client'
import { useAPI } from '../api/useAPI'

type Quote = {
  quotes: [id: number, quote: String, author: String]
}
export default function QuotesList() {
  const { data: quotes } = useAPI<Quote[]>('https://dummyjson.com/quotes')
  console.log(quotes)
  return (
    <ul>
      {quotes?.map((quote) => {
        return (
          <li key={quote.id}>
            <strong>{quote.quote}</strong>
            <p>{quote.author}</p>
          </li>
        )
      })}
    </ul>
  )
}
