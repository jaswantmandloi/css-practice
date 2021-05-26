import styles from "./Rating.module.scss";

const ratings = [1, 2, 3, 4, 5];

export default function Index({ rating = 0 }) {
  return (
    <ul className={styles.ratings}>
      {ratings.map((item) => {
        const imageName =
          rating >= item ? "active-star.svg" : "in-active-star.svg";
        return (
          <li key={item}>
            <img src={`/css/index/products/${imageName}`} />
          </li>
        );
      })}
    </ul>
  );
}
