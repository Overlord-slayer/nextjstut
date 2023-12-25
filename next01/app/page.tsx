import Link from "next/link"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>Hola mundo!</h1>
      <Link href='/about'>Redireccionamiento a la pantalla about</Link>
    </main>
  )
}
