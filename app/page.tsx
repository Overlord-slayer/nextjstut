import Posts from "./components/Posts"
import MyProfilePic from './components/MyProfilePic'

export const revalidate = 86400

export default function Home() {
  return (
    <div className="mx-auto">
      <MyProfilePic/>
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hola y Bienvenido 👋&nbsp;
        <span className="whitespace-nowrap">
          Soy <span className="font-bold">Samuel</span>.
        </span>
      </p>
      <Posts/>
    </div>
  )
}
