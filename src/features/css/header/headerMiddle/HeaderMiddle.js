import styles from "./HeaderMiddle.module.scss";

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
  );
}
