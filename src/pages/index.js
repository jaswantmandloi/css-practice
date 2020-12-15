import Head from "next/head";
import styles from "../styles/home.module.css";
import Header from "shared/components/header/header";

export default function Home() {
  //console.log("process", process.env.DB_HOST);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </div>
  );
}
