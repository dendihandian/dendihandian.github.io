import Head from 'next/head'
import Link from 'next/link'
import { Fragment } from 'react'

const portfolios = [
    {
        'name': 'Data Portfolio',
        'desc': 'A curated list of my exploratory data analysis and machine learning modeling on various datasets. Machine learning model deployed using FastAPI and web UI using NextJS.',
        'project_url': 'https://data-portfolio.netlify.app',
        'colors': ['text-teal-500', 'from-teal-500', 'to-teal-700'],
    },
    {
        'name': 'Sklearn Datasets ML API',
        'desc': 'A proof of concept project for demonstrating the Sklearn ML classification and regression models served as API and containerizated as docker service.',
        'project_url': 'https://hub.docker.com/r/dendihandian/sklearn-datasets-ml-api',
        'colors': ['text-stone-500', 'from-stone-500', 'to-stone-700'],
    },
    {
        'name': 'Transfermarkt Scrapper',
        'desc': 'A scrapy project for scraping transfers per day data from transfermarkt website and store it into SQLite database',
        'project_url': 'https://github.com/dendihandian/transfermarkt-scrapper-api',
        'colors': ['text-stone-500', 'from-stone-500', 'to-stone-700'],
    },
    {
        'name': 'Grafify',
        'desc': 'An JSON graph viewer app based on D3.js and NetworkX.',
        'project_url': 'https://grafify.herokuapp.com',
        'colors': ['text-green-500', 'from-green-500', 'to-green-700'],
    },
    {
        'name': 'SBAdmin Laravel Starter',
        'desc': 'Laravel Admin Panel Starter based on SBAdmin Template.',
        'project_url': 'https://sbadmin-laravel.herokuapp.com',
        'colors': ['text-blue-500', 'from-blue-500', 'to-blue-700'],
    },
    {
        'name': 'Agrabinta',
        'desc': 'A small-focused GIS for Agrabinta sub-district.',
        'project_url': 'https://agrabinta.netlify.app',
        'colors': ['text-purple-500', 'from-purple-500', 'to-purple-700'],
    },
    {
        'name': 'WhatsApp Messaging Director',
        'desc': 'Text someone on WhatsApp without saving the number and open the room in the application',
        'project_url': '/whatsapp-messaging-director',
        'colors': ['text-green-500', 'from-green-500', 'to-green-700'],
        'built_in': true,
    },
  ]

export default function Portfolios() {
    return (
        <Fragment>
        <Head>
            <title>Dendi Handian | Portfolios</title>
            <meta name="description" content="The portfolios of Dendi Handian" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="flex flex-col p-8 mt-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {portfolios.map((portfolio, index) => (
                    <div key={index} className="relative flex flex-col w-full h-32 border border-white rounded">
                        <div className="px-4 py-3 leading-none text-left">
                            <h3 className={`font-medium ` + portfolio.colors[0]}>{portfolio.name}</h3>
                        </div>
                        <div className="flex-grow px-4">
                            <p className="text-sm leading-none text-left text-white">{portfolio.desc}</p>
                        </div>
                        <div className="absolute bottom-0 right-0 mb-2 mr-2">
                            {(portfolio.built_in || false) ? (
                                <Link href={portfolio.project_url} as={process.env.BACKEND_URL + portfolio.project_url}>
                                    <a className={`px-2 py-1 text-xs text-white rounded bg-gradient-to-r ` + portfolio.colors[1] + ` ` + portfolio.colors[2]}>See Project</a>
                                </Link>
                            ) : (
                                <a className={`px-2 py-1 text-xs text-white rounded bg-gradient-to-r ` + portfolio.colors[1] + ` ` + portfolio.colors[2]} href={portfolio.project_url} target="_blank">See Project</a>
                            )}
                        </div>
                    </div>
                ))}
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
