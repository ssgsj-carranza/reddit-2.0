import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import PostBox from '../components/PostBox'


const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Reddit 2.0</title>
      </Head>
      {/* postbox */}
      <PostBox />
      <div>
        {/* feed */}
      </div>
    </div>
  )
}

export default Home

// npm install @heroicons/react
// npm install next-auth
// npm install -g stepzen
// stepzen login -a bouafle
// stepzen import postgresql
// stepzen start
// npm install @apollo/client graphql
