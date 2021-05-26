import styles from "./Icons.module.scss";

const icons = [1, 2, 3, 4, 5];

export default function Index() {
  return (
    <ul className={styles.icons}>
      {icons.map((item) => {
        return <li key={item}></li>;
      })}
    </ul>
  );
}
