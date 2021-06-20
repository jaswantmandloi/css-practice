import styles from "./HeaderTop.module.scss";

export default function Index({ isLoggedIn, onLogout }) {
  return (
    <div className={styles.topHeader}>
      <div className={styles.topHeaderFirstPart}>
        <div className={styles.languageSelector}>
          <select>
            <option>En</option>
            <option>Fr</option>
          </select>
        </div>
        {isLoggedIn ? (
          <div className={styles.logout}>
            <button onClick={onLogout}>Logout</button>
          </div>
        ) : null}
      </div>
      <div className={styles.topHeaderSecondPart}>
        {isLoggedIn ? (
          <div className={styles.messages}>
            <button>Messages</button>
          </div>
        ) : null}
        <div className={styles.liveChat}>
          <button>Live Chat</button>
        </div>
      </div>

      {isLoggedIn ? (
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
      ) : null}
    </div>
  );
}
