import React from 'react'

function AboutLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <nav>About NavBar</nav>
      <main>
        {children}
      </main>
    </>
  )
}

export default AboutLayout