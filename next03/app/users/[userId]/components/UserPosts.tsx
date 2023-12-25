import React from 'react'

type Props = {
  promise: Promise<Post[]>
}

export default async function UserPosts({ promise}: Props) {
  const post = await promise

  const content = post.map(post => {
    return (
      <article key={post.id}>
        <h2>{post.name}</h2>
        <br />
        <p>{post.body}</p>
        <br />
      </article>
    )
  })
  return content
}
