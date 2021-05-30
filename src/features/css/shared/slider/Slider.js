import styles from "./Slider.module.scss";

export default function Index() {
  return (
    <div className={styles.slider}>
      <button className={styles.leftArrow}>&#8592;</button>
      <img src="/css/index/slider1.jpg" />
      <button className={styles.rightArrow}>&#8594;</button>
      <ul className={styles.dots}>
        <li className={styles.active}></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
