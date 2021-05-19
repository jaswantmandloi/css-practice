import Head from "next/head";
import styles from "styles/css/index.module.css";
import Footer from "features/css/footer";
import HeaderTop from "features/css/header/headerTop";
import MegaMenu from "features/css/header/megaMenu";
import HeaderMiddle from "features/css/header/headerMiddle";
import Slider from "features/css/slider";
import UserInfo from "features/css/userInfo";

export default function Index() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <HeaderTop />
        <HeaderMiddle />
        <MegaMenu />
        <Slider />
        <UserInfo />
        <Footer />
      </div>
    </>
  );
}
