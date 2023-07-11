import QuotesList from './components/quotesList'

export default function Home() {
  return (
    <>
      <div className="m-10">
        <div className="flex h-full w-full flex-col items-center justify-center gap-2">
          <h1 className="text-2xl text-white">Conselhos Search</h1>
          <QuotesList />
        </div>
      </div>
    </>
  )
}
