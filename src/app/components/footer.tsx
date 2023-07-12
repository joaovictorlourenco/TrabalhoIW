import Image from 'next/image'
import joao from '../../../public/joao.jpg'
import yang from '../../../public/yang.jpg'

export default function Footer() {
  return (
    <>
      <div className="relative bottom-0 flex h-64 w-full items-center justify-center gap-6 bg-black text-white">
        <Image
          className="rounded-full"
          width={100}
          height={100}
          src={joao}
          alt="Foto de João Victor"
        />
        <strong>João Victor Lourenço</strong> - <p>TIAW</p> - <p>2023</p>
        <Image
          className="rounded-full "
          width={100}
          height={100}
          src={yang}
          alt="Foto de Yang Neiva"
        />
        <strong>Yang Neiva</strong> - <p>TIAW</p> - <p>2023</p>
      </div>
    </>
  )
}
