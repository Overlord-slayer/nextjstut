import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className='text-center'>
      <p className='mt-10'>
        Lo sentimos, la publicación solicitada no existe.
      </p>
      <Link href="/">Página principal</Link>
    </div>
  )
}
