import '../styles/globals.css'
// import AppHeader from '../components/AppHeader'
// import AppFooter from '../components/AppFooter'

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-800">
      {/* <AppHeader/> */}
      <main className='flex items-center justify-center h-screen'>
        <Component {...pageProps} />
      </main>
      {/* <AppHeader/> */}
    </div>
  )
}

export default MyApp