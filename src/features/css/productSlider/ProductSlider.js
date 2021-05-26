import styles from "./ProductSlider.module.scss";
import Product from "features/css/product";
import Carousel from "react-multi-carousel";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};

export default function Index({ products = [] }) {
  return (
    <div className={styles.productSlider}>
      <div className={styles.heading}>Items You Might Like</div>
      <div className={styles.productsContainer}>
        <Carousel responsive={responsive}>
          {products.map((product, index) => {
            return <Product key={index} product={product} viewType="card" />;
          })}
        </Carousel>
      </div>
    </div>
  );
}
