import Head from 'next/head'
import Link from 'next/link'
import { Fragment, useState } from 'react'

export default function Portfolios() {

    const [countryCode, setCountryCode] = useState('62');
    const [countrylessPhoneNumber, setCountrylessPhoneNumber] = useState('');

    const open_room = () => {
        window.open('https://wa.me/' + countryCode + countrylessPhoneNumber)
    }

    return (
        <Fragment>
            <Head>
                <title>WhatsApp Messaging Director</title>
                <meta name="description" content="Text someone on WhatsApp without saving the number and open the room in the application" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex flex-col p-8 mt-6">
                <div className="flex flex-col justify-center w-full space-y-6">
                    <h1 className="font-bold text-center text-white text-7xl"><span className="text-green-500">WhatsApp</span> Messaging Director</h1>
                    <h2 className="text-center text-white">Text someone on WhatsApp without saving the number and open the room in the application.</h2>
                    <div className="text-center">
                        <span className="p-2 font-bold bg-yellow-300">This utility fully done in client-side and your data is not going anywhere</span>
                    </div>
                    <div className="flex justify-center w-full py-4 space-x-4">
                        <select className="h-16 px-4 text-2xl font-bold rounded" name="country_code" id="country_code" onChange={e => setCountryCode(e.target.value)}>
                            <option value="62" selected>(Indonesia) +62</option>
                        </select>
                        <input className="px-4 text-2xl font-bold rounded" type="text" name="countryless_phone_number" id="countryless_phone_number" onChange={e => setCountrylessPhoneNumber(e.target.value)}/>
                    </div>
                    <div className="flex justify-center w-full">
                        <button className="px-8 py-4 text-2xl text-white bg-green-500 rounded" type="button" onClick={open_room}>Open Room</button>
                    </div>
                </div>

                <div className="w-full mt-16 text-center">
                    <Link href="/" as={process.env.BACKEND_URL + '/'}>
                        <a className="text-gray-500 hover:text-gray-300">Back to Home</a>
                    </Link>
                </div>

            </div>

        </Fragment>
    )
}
