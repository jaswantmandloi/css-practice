import styles from "./Offers.module.scss";
import Carousel from "react-multi-carousel";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
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

export default function Index({ offers }) {
  return (
    <div className={styles.offers}>
      <div className={styles.spacer}>
        <Carousel responsive={responsive}>
          {offers.map((offer, index) => {
            return (
              <div key={index} className={styles.box}>
                <div className={styles.details}>
                  <h1>{offer.heading}</h1>
                  <p>{offer.details}</p>
                  <div>
                    <a href="#">Shop Now</a>
                  </div>
                </div>
                <div className={styles.image}>
                  <img src={offer.image} />
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
