import useTogger from "features/css/shared/hooks/useToggle";
import styles from "./Cart.module.scss";

export default function Index() {
  const { isOpen, changeToggle } = useTogger(false);

  const handleToggle = function () {
    changeToggle();
  };

  return (
    <>
      <button onClick={handleToggle}>
        <img src="/css/index/cart .png" />
        <span>Cart</span>

        <div className={`${styles.cart} ${isOpen ? styles.active : ""}`}>
          <div className={styles.header}>8 Items</div>
        </div>
      </button>
    </>
  );
}
