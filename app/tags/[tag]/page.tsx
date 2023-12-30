import { getPostMeta } from "@/lib/posts"
import ListItem from "@/app/components/ListItem"
import Link from "next/link"

export const revalidate = 86400

type Props = {
  params: {
    tag: string
  }
}

export async function generateStaticParams() {
  const posts = await getPostMeta()

  if (!posts) return []

  const tags = new Set(posts.map(post => post.tags).flat())

  return Array.from(tags).map((tag) => ({ tag }))
}

export function generateMetadata({ params: { tag } } : Props) {
  return {
    title: `Publicación sobre ${tag}`
  }
}

export default async function TagPostList({ params: { tag } }: Props) {
  const posts = await getPostMeta() //deduped

  if (!posts) return <p className="mt-10 text-center">Lo sentimos, pulicación no disponible.</p>

  const tagPosts = posts.filter(post => post.tags.includes(tag))

  if (!tagPosts.length) {
    return (
      <div className="text-center">
        <p className="mt-10">
          Lo sentimos, no hay publicaciones relacionadas
        </p>
        <Link href="/">Página principal</Link>
      </div>
    )
  }

  return (
    <>
      <h2 className="text-3xl mt-4 mb-0">
        Resultados para: #{tag}
      </h2>
      <section className="mt-6 mx-auto max-w-2xl">
        <ul className="w-full list-none p-0">
          {tagPosts.map(post => (
            <ListItem key={post.id} post={post}/>
          ))}
        </ul>
      </section>
    </>
  )
}