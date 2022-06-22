import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Reddit 2.0</title>
      </Head>
      <Header />
    </div>
  )
}

export default Home

// npm install @heroicons/react
// npm install next-auth
