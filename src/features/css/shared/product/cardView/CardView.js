import styles from "./CardView.module.scss";
import Rating from "features/css/shared/product/rating";
import Icons from "features/css/shared/product/icons";

export default function Index({ product }) {
  const {
    subTitle = "",
    productCode = "",
    memberPrice = "",
    price = "",
  } = product;
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
        <div className={styles.icons}>
          <Icons />
        </div>
      </div>
      <div className={styles.footer}>
        <div>{price}</div>
        <div>each</div>
      </div>
    </div>
  );
}
