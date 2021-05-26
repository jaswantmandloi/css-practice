import styles from "./CardView.module.scss";
import Rating from "features/css/product/rating";

export default function Index({ product }) {
  const { subTitle = "", productCode = "", memberPrice = "" } = product;
  return (
    <div className={styles.product}>
      <div className={styles.header}>
        <img src="/css/index/products/plus.svg" />
      </div>
      <div className={styles.image}>
        <img src={product.image} />
      </div>
      <div className={styles.body}>
        <div className={styles.title}>{product.title}</div>
        <div className={styles.rating}>
          <Rating rating={product.rating} />
          <div>({product.rating} reviews)</div>
        </div>
        <div className={styles.subTitle}>{subTitle}</div>
        <div className={styles.productCode}>{productCode}</div>
        <div className={styles.memberPrice}>{memberPrice}</div>
      </div>
    </div>
  );
}
