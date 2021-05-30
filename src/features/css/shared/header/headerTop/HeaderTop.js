import styles from "./HeaderTop.module.scss";

export default function Index() {
  return (
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
  );
}
