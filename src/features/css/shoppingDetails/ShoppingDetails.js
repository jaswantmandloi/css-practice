import styles from "./ShoppingDetails.module.scss";

export default function Index() {
  return (
    <div className={styles.shoppingDetails}>
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
    </div>
  );
}
