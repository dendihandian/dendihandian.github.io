import '../styles/globals.css'
import Script from 'next/script'
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

      <Script
        id="google-analytics"
        src="https://www.googletagmanager.com/gtag/js?id=G-K1GBRPSSCL"
        onLoad={() => {
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-K1GBRPSSCL');
        }}
      />
    </div>
  )
}

export default MyApp