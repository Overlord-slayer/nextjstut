import React from 'react'
import Link from 'next/link'

function About() {
  // throw new Error("No hoy!")
  return (
    <>
      <h1 className='flex flex-col justify-center items-center'>
        About
      </h1>
      <Link href="/">Redireccionamiento a la pantalla principal</Link>
    </>
  )
}

export default About