import styles from "./ShoppingDetails.module.scss";
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

export default function Index() {
  return (
    <div className={styles.shoppingDetails}>
      <Carousel responsive={responsive} itemClass={styles.carouselItem}>
        <div
          className={`${styles.card} ${styles.approvalOrder} ${styles.approver}`}
        >
          <h2>Approvals</h2>
          <div>
            <img src="/css/index/ok.png" />
            <p>
              You are all caught up! You have no orders to approve at this time.
            </p>
          </div>
        </div>

        <div className={`${styles.card} ${styles.approvalOrder}`}>
          <h2>Orders</h2>
          <div>
            <img src="/css/index/ok.png" />
            <p>
              You don’t have any recent orders to display. Status for pending
              orders will appear here.
            </p>
          </div>
        </div>

        <div
          className={`${styles.card} ${styles.approvalOrder}  ${styles.orders}`}
        >
          <div>
            <h2>Lists</h2>
            <a href="#">View all</a>
          </div>
          <ul className={styles.listItems}>
            <li>
              <div>
                <h5>Test List</h5>
                <img src="/css/index/open-box.png" />
                <div>3 items in this list</div>
              </div>
            </li>
            <li>
              <div>
                <h5>Test List</h5>
                <img src="/css/index/open-box.png" />
                <div>1 items in this list</div>
              </div>
            </li>
            <li>
              <div>
                <h5>Create List</h5>
                <img src="/css/index/plus.svg" />
              </div>
            </li>
          </ul>
        </div>
      </Carousel>
    </div>
  );
}
