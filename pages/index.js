import Head from 'next/head'
import StoreList from '../components/StoreList'

export default function Home({ stores }) {
  return (
    <div>
      <Head>
        <title>MyStore App</title>
        <meta name="description" content="Your daily store app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StoreList stores={ stores }/>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:5000/api/stores`)
  const stores = await res.json()

  return {
    props: {
      stores
    }
  }
}