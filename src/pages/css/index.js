import Head from "next/head";
import styles from "styles/css/index.module.css";

export default function Index() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.topHeader}>
          <div className={styles.languageSelector}>
            <select>
              <option>En</option>
              <option>Fr</option>
            </select>
          </div>
          <div className={styles.liveChat}>
            <button>Live Chat</button>
          </div>
        </div>
      </div>
    </>
  );
}
