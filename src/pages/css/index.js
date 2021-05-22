import Head from "next/head";
import styles from "styles/css/index.module.css";
import Footer from "features/css/footer";
import HeaderTop from "features/css/header/headerTop";
import MegaMenu from "features/css/header/megaMenu";
import HeaderMiddle from "features/css/header/headerMiddle";
import Slider from "features/css/slider";
import UserInfo from "features/css/userInfo";
import UserFinance from "features/css/userFinance";
import ShoppingDetails from "features/css/shoppingDetails";
import "react-multi-carousel/lib/styles.css";

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
        <UserFinance />
        <ShoppingDetails />
        <Footer />
      </div>
    </>
  );
}

Index.getInitialProps = async (ctx) => {
  return { query: ctx.query };
};
