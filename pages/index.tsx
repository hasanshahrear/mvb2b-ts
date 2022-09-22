import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
         Weolcome to MotionView B2B
        </h1>
        <ul>
          <li>
            <Link href="/" >Home</Link>
          </li>
          <li>
            <Link href="/dealer" >Dealer</Link>
          </li>
          <li>
            <Link href="/dealer/products" >Products</Link>
          </li>
        </ul>
      </main>
      
    </div>
  )
}

export default Home
