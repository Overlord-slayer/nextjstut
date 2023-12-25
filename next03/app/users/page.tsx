import type { Metadata } from "next"
import Link from "next/link"

import getAllUsers from "@/lib/getAllUsers"

export const metadata: Metadata = {
  title: 'Users',
}

export default async function UserPage() {
  const usersData: Promise<User[]> = getAllUsers()
  const users = await usersData

  console.log("Hola")
  const content = (
    <section>
      <h2 className="font-semibold">
        <Link href="/">Back to Home</Link>
      </h2>
      <br/>
      {users.map(user => {
        return (
          <>
            <p key={user.id}>
              <Link href={`/users/${user.id}`}>
                {user.name}
              </Link>
            </p>
            <br />
          </>
        )
      })}
    </section>
  )
  return content
}