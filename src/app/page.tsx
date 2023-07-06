import Input from '@/app/components/input'

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen">
        <div className="flex h-full w-full flex-col items-center justify-center gap-2">
          <h2 className="text-lg text-white">Seu conselho diario</h2>
          <Input />
        </div>
      </div>
    </>
  )
}
