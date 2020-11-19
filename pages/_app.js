import '../styles/globals.css'
import NewRelic from '../components/shared/newrelic/newrelic'

function MyApp({ Component, pageProps }) {

  const newRelicSrc = '/newrelic.js';

  return <>
  <Component {...pageProps} />

  <NewRelic></NewRelic>
  </>
}

export default MyApp


