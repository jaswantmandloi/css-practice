import useTogger from "features/css/shared/hooks/useToggle";
import styles from "./SignIn.module.scss";

export default function Index({ onLogin }) {
  const { isOpen, changeToggle } = useTogger();

  const handleToggle = function () {
    changeToggle();
  };

  return (
    <>
      <button onClick={handleToggle} className={styles.button}>
        <img src="/css/index/account.png" />
        <span>Sign In</span>

        <div className={`${styles.sigin} ${isOpen ? styles.active : ""}`}>
          <div className={`${styles.header} ${styles.spacer}`}>
            <div>Sign in</div>
            <div>Close</div>
          </div>

          <div className={styles.saparater}></div>

          <div className={`${styles.body} ${styles.spacer}`}>
            <div className={styles.userField}>
              <label>User ID</label>
              <input type="text" name="userId" />
            </div>
            <div className={styles.userField}>
              <label>Password</label>
              <input type="password" name="password" />
            </div>
            <div className={styles.rememberMe}>
              <label>
                <input type="checkbox" name="rememberMe" /> Save User ID
              </label>
            </div>
            <div className={styles.siginButton}>
              <button onClick={onLogin}>Sign In</button>
            </div>
            <div className={styles.textWithLink}>
              Forgot <a href="#">User Id</a> or <a href="#">Password</a>
            </div>
            <div className={styles.textWithLink}>
              Federal Government Customers? <a href="#">Click here</a>
            </div>
          </div>
          <div className={styles.saparater}></div>

          <div className={`${styles.postalCodeEntry} ${styles.spacer}`}>
            <p>
              Don’t have a login and want to shop as a guest? Enter your postal
              code below and start shopping as a guest, right away!
            </p>
            <div className={styles.userField}>
              <label>Postal Code</label>
              <input type="text" name="postalCode" />
            </div>
            <div className={styles.shopAsGuest}>
              <button>Shop as guest</button>
            </div>
          </div>
        </div>
      </button>
    </>
  );
}
