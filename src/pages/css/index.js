import "react-multi-carousel/lib/styles.css";
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
import MembershipDetails from "features/css/membershipDetails";
import ItemListing from "features/css/itemListing";

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
        <MembershipDetails />
        <ItemListing items={shopCategories} heading="Shop our top categories" />
        <ItemListing
          items={membershipCategories}
          heading="Your membership benefits"
        />
        <Footer />
      </div>
    </>
  );
}

Index.getInitialProps = async (ctx) => {
  return { query: ctx.query };
};

const shopCategories = [
  { image: "/css/index/Tea.svg", label: "Breakroom" },
  { image: "/css/index/ink-tonner.svg", label: "Ink & Toner" },
  { image: "/css/index/Cleaning.svg", label: "Janitorial Supplies" },
  { image: "/css/index/Book.svg", label: "Office supplies" },
];

const membershipCategories = [
  { image: "/css/index/box.svg", label: "Special paper pricing" },
  { image: "/css/index/tag.svg", label: "Access to business perks" },
  { image: "/css/index/laptop.svg", label: "500+ key value items" },
  { image: "/css/index/shield.svg", label: "Money back guarantee" },
];
