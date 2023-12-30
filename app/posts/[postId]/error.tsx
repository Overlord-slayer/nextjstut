'use client'

import { useEffect } from "react"
import Link from "next/link"

export default function Error({
  error,
  reset
}: {
  error: Error,
  reset: () => void
}) {

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="bg-slate-200 mx-auto max-w-lg py-1 px-4 min-h-screen">
      <h2 className="my-4 text-2xl font-bold">
        Algo salió mal
      </h2>
      <button className="mb-4 p-4 bg-red-500 text-white rounded-xl"
        onClick={
          // Intento de recuperación, basado en la re-renderización del segmento
          () => reset()
        }
      >
        Volver a intentar
      </button>
      <p className="text-xl">
        O regresar a <Link href="/" className="underline">Inicio</Link>
      </p>
    </main>
  )
}