import Head from 'next/head'
import { Fragment } from 'react'
import {TypedIntroduction} from '../components/TypedIntroduction'

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Dendi Handian</title>
        <meta name="description" content="The official personal site of Dendi Handian" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TypedIntroduction/>
    </Fragment>
  )
}
