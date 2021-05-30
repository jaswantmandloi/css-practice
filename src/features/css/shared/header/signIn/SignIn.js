import useTogger from "features/css/shared/hooks/useToggle";
import styles from "./SignIn.module.scss";
import positionElement from "position-element";
import { useRef } from "react";

export default function Index() {
  const { isOpen, changeToggle } = useTogger();

  const signInRef = useRef(null);

  const handleToggle = function (event) {
    const { target } = event;

    changeToggle();

    const config = {
      element: signInRef.current,
      anchorElement: target,
      preferredPlacement: "left-bottom",
      distance: 1,
      alignmentOffset: 0,
      autoReposition: true,
    };

    positionElement(config);
  };

  return (
    <>
      <button onClick={handleToggle} className={isOpen ? styles.active : ""}>
        <img src="/css/index/account.png" />
        <span>Sign In</span>
      </button>
      <div
        className={`${styles.sigin} ${isOpen ? styles.active : ""}`}
        ref={signInRef}
      >
        <div className={styles.header}>
          <div>Sign in</div>
          <div>Close</div>
        </div>

        <div className={styles.body}>
          <div className={styles.userField}>
            <label>User ID</label>
            <input type="text" name="userId" />
          </div>
        </div>
      </div>
    </>
  );
}
