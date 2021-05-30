import styles from "./Product.module.scss";
import CardView from "./cardView";

export default function Index({ product, viewType }) {
  return (
    <div className={styles.product}>
      {viewType === "card" ? <CardView product={product} /> : null}
    </div>
  );
}
