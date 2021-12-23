import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dendi Handian</title>
        <meta name="description" content="The official personal site of Dendi Handian" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
        <a>Go to About</a>
      </Link>
    </div>
  )
}
