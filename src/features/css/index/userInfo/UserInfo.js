import styles from "./UserInfo.module.scss";

export default function Index() {
  return (
    <div className={styles.userInfo}>
      <div className={styles.username}>Hi, John</div>
      <div className={styles.date}>
        <div>Premium</div>
        <div>Renewal Date: July 2020</div>
      </div>
      <div className={styles.amount}>
        <div>$119</div>
        <div>
          Annual Company Savings <span>i</span>
        </div>
      </div>
      <div className={styles.userDescription}>
        <div>
          Find even more great products and savings online by viewing our
          <a href="#"> flyers and publications. </a>
        </div>
      </div>
    </div>
  );
}
