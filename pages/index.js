import Link from 'next/link'
import Head from 'next/head'
import { Fragment } from 'react'

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Dendi Handian</title>
        <meta name="description" content="The official personal site of Dendi Handian" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <span>I'm rebuilding the site using NextJS. Visit me again next time.</span>

    </Fragment>
  )
}
