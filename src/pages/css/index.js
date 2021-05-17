import Head from "next/head";
import styles from "styles/css/index.module.css";
import Footer from "features/css/footer";

export default function Index() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.topHeader}>
          <div className={styles.topHeaderFirstPart}>
            <div className={styles.languageSelector}>
              <select>
                <option>En</option>
                <option>Fr</option>
              </select>
            </div>
            <div className={styles.logout}>
              <button>Logout</button>
            </div>
          </div>
          <div className={styles.topHeaderSecondPart}>
            <div className={styles.messages}>
              <button>Messages</button>
            </div>
            <div className={styles.liveChat}>
              <button>Live Chat</button>
            </div>
          </div>

          <div className={styles.topHeaderLastPart}>
            <div className={styles.shipToLocation}>
              <span>Ship to location</span>
              <span>*</span>
              <span>Hamilton Employee (178318) &darr;</span>
            </div>
            <div className={styles.findAccount}>
              <button>Find Account</button>
            </div>
          </div>
        </div>

        <div className={styles.header}>
          <img
            src="/css/index/business advantage.svg"
            className={styles.logo}
          />
          <div className={styles.headerMiddle}>
            <div className={styles.searchBar}>
              <input
                type="search"
                placeholder="Search for all business needs"
              />
              <button className={styles.search}>
                <img src="/css/index/one_search.png" className={styles.logo} />
              </button>
            </div>
            <div className={styles.inkToner}>
              <button>
                <img src="/css/index/drop@1x.png" /> &nbsp; Ink & Toner
              </button>
            </div>
          </div>
          <div className={styles.buttons}>
            <button>
              <img src="/css/index/account.png" />
              <span>Sign In</span>
            </button>
            <button>
              <img src="/css/index/connect@1x.png" />
              <span>Help</span>
            </button>
            <button>
              <img src="/css/index/cart .png" />
              <span>Cart</span>
            </button>
          </div>
        </div>

        <div className={styles.megaMenu}>
          <button>PRODUCTS &darr;</button>
          <button>Services & Solutions &darr;</button>
          <button>Flyers & Publications </button>
          <button>Become a customer </button>
        </div>

        <Footer />
      </div>
    </>
  );
}
