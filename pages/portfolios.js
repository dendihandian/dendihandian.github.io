import Head from 'next/head'
import Link from 'next/link'
import { Fragment } from 'react'

export default function Portfolios() {
    return (
        <Fragment>
        <Head>
            <title>Dendi Handian | Portfolios</title>
            <meta name="description" content="The portfolios of Dendi Handian" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="flex flex-col">

            <span className="mb-4 text-orange-500">Coming soon...</span>

            <Link href="/" as={process.env.BACKEND_URL + '/'}>
                <a className="text-gray-500 hover:text-gray-300">Back to Home</a>
            </Link>
        </div>

        </Fragment>
    )
}
