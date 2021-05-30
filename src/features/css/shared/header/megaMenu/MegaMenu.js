import styles from "./MegaMenu.module.scss";

export default function Index() {
  return (
    <div className={styles.megaMenu}>
      <button>PRODUCTS &darr;</button>
      <button>Services & Solutions &darr;</button>
      <button>Flyers & Publications </button>
      <button>Become a customer </button>
    </div>
  );
}
