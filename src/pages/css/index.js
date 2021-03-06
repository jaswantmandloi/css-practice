import "react-multi-carousel/lib/styles.css";
import Head from "next/head";
import styles from "styles/css/index.module.css";
import Footer from "features/css/shared/footer";
import HeaderTop from "features/css/shared/header/headerTop";
import MegaMenu from "features/css/shared/header/megaMenu";
import HeaderMiddle from "features/css/shared/header/headerMiddle";
import Slider from "features/css/shared/slider";
import UserInfo from "features/css/index/userInfo";
import UserFinance from "features/css/index/userFinance";
import ShoppingDetails from "features/css/index/shoppingDetails";
import MembershipDetails from "features/css/index/membershipDetails";
import ItemListing from "features/css/index/itemListing";
import ProductSlider from "features/css/shared/productSlider";
import Offers from "features/css/index/offers";
import { useEffect, useState } from "react";

export default function Index() {
  const [key, setKey] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setKey(new Date().getTime());
  }, []);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  // if (!key) {
  //   return null;
  // }

  return (
    <>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container} key={key}>
        <HeaderTop isLoggedIn={isLoggedIn} onLogout={handleLogoutClick} />
        <HeaderMiddle isLoggedIn={isLoggedIn} onLogin={handleLoginClick} />
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
        <ProductSlider
          products={recommendedProducts}
          sliderHeading="Items You Might Like"
        />
        <Offers offers={offers} />
        <ProductSlider
          products={recommendedProducts}
          sliderHeading="Recently Viewed Items"
        />
        <Footer />
      </div>
    </>
  );
}

// Index.getInitialProps = async (ctx) => {
//   return { query: ctx.query };
// };

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

const recommendedProducts = [
  {
    image: "/css/index/products/1.jpeg",
    title: "Starbucks Pike Place Keurig K-Cup Pods, 40 Count",
    rating: 3,
    subTitle: "Dominion Blueline Inc.",
    productCode: "MOTLS22087AZM01",
    memberPrice: "Member price",
    price: "$399",
  },
  {
    image: "/css/index/products/2.jpeg",
    title: "Starbucks Pike Place Keurig K-Cup Pods, 40 Count",
    rating: 5,
    subTitle: "Dominion Blueline Inc.",
    productCode: "MOTLS22087AZM01",
    memberPrice: "Member price",
    price: "$399",
  },
  {
    image: "/css/index/products/3.jpeg",
    title: "Starbucks Pike Place Keurig K-Cup Pods, 40 Count",
    rating: 1,
    subTitle: "Dominion Blueline Inc.",
    productCode: "MOTLS22087AZM01",
    memberPrice: "Member price",
    price: "$399",
  },
  {
    image: "/css/index/products/4.jpeg",
    title: "Starbucks Pike Place Keurig K-Cup Pods, 40 Count",
    rating: 0,
    subTitle: "Dominion Blueline Inc.",
    productCode: "MOTLS22087AZM01",
    memberPrice: "Member price",
    price: "$399",
  },
  {
    image: "/css/index/products/5.jpeg",
    title: "Starbucks Pike Place Keurig K-Cup Pods, 40 Count",
    rating: 4,
    subTitle: "Dominion Blueline Inc.",
    productCode: "MOTLS22087AZM01",
    memberPrice: "Member price",
    price: "$399",
  },
];

const offers = [
  {
    heading: "25% Off",
    details: `When you buy 24 of
    the same select Pental
    Mechanical Pencils.`,
    image: "/css/index/products/pen.png",
  },
  {
    heading: "15% Off",
    details: `When you buy 2 of the same select Computer Cleaning Products. `,
    image: "/css/index/products/air-fresher.png",
  },
  {
    heading: "10% Off",
    details: `When you buy select Derwent Art Supplies.`,
    image: "/css/index/products/pencil-box.png",
  },
];
