import styles from "./HeaderMiddle.module.scss";
import Help from "features/css/shared/header/help";
import SignIn from "features/css/shared/header/signIn";
import Cart from "features/css/shared/header/cart";

export default function Index() {
  return (
    <div className={styles.header}>
      <img src="/css/index/business advantage.svg" className={styles.logo} />
      <div className={styles.headerMiddle}>
        <div className={styles.searchBar}>
          <input type="search" placeholder="Search for all business needs" />
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
        <SignIn />
        <Help />
        <Cart />
      </div>
    </div>
  );
}
