import React from 'react'

export default async function getUser(userId: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

  if (!res.ok) throw new Error('Fallo en la obtención del usuario')
  
  return res.json()
}
