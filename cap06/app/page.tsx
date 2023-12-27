import Posts from "./components/Posts";

export const revalidate = 10

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hola y Bienvenido 👋&nbsp;
        <span className="whitespace-nowrap">
          Soy <span className="font-bold">Samuel</span>.
        </span>
      </p>
      <Posts/>
    </main>
  )
}
