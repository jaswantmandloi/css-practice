import "../styles/globals.css";
import NewRelic from "../components/shared/newrelic/newrelic";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />

      <NewRelic></NewRelic>
    </>
  );
}

export default MyApp;
