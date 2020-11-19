import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  const newRelicSrc = '/newrelic.js';

  return <>
  <Component {...pageProps} />

  <Head>
        <script type = "text/javascript" src={newRelicSrc} />
  </Head>

  </>
}

export default MyApp


