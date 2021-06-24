import useTogger from "features/css/shared/hooks/useToggle";
import styles from "./Help.module.scss";

export default function Index() {
  const { isOpen, changeToggle } = useTogger(false);

  const handleToggle = function () {
    changeToggle();
  };

  return (
    <>
      <button onClick={handleToggle} className={styles.button}>
        <img src="/css/index/connect@1x.png" />
        <span>Help</span>
        <div className={`${styles.help} ${isOpen ? styles.active : ""}`}>
          <ul>
            {["Contact Us", "Help Center", "Recall Information"].map(
              (item, index) => {
                return <li key={index}>{item}</li>;
              }
            )}
          </ul>
        </div>
      </button>
    </>
  );
}
