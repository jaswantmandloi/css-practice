import '../styles/globals.css'
import Head from 'next/head'
import NewRelicSnippet from '../components/shared/newrelic/newrelic'

function MyApp({ Component, pageProps }) {
  return <>
  <Head>
      <NewRelicSnippet />
  </Head>
  <Component {...pageProps} />
  </>
}

export default MyApp


