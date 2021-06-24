import useTogger from "features/css/shared/hooks/useToggle";
import styles from "./Cart.module.scss";

export default function Index({ isLoggedIn }) {
  const { isOpen, changeToggle } = useTogger(false);

  const handleToggle = function () {
    changeToggle();
  };

  return (
    <>
      <button onClick={handleToggle}>
        <img src="/css/index/cart .png" />
        <span>Cart</span>

        <div className={`${styles.cart} ${isOpen ? styles.active : ""}`}>
          {isLoggedIn ? (
            <>
              <div className={styles.header}>8 Items</div>
              <div className={styles.body}>
                {cartProducts.map((product) => {
                  const { productCode, quantity } = product;
                  return (
                    <div key={productCode} className={styles.productItem}>
                      <div>{productCode}</div>
                      <div>{quantity}</div>
                    </div>
                  );
                })}
                <div className={styles.total}>
                  <div className={styles.totalItems}>+5 more items</div>
                  <div className={styles.orderTotal}>
                    <div>Order total :</div>
                    <div>$92.46</div>
                  </div>
                </div>
              </div>
              <div className={styles.footer}>
                <div className={styles.actions}>
                  <button>Checkout</button>
                  <button>View cart</button>
                </div>
                <div className={styles.linkDescription}>
                  <a href="#">Click here</a> to add a catalogue
                </div>
                <div className={styles.linkDescription}>
                  <a href="#">Click here</a> for printable version
                </div>
              </div>
            </>
          ) : (
            <div className={styles.withoutLoginMessage}>
              To use this feature, please sign in as guest or become a member.
            </div>
          )}
        </div>
      </button>
    </>
  );
}

const cartProducts = [
  { productCode: "DMNC181731", quantity: 1 },
  { productCode: "DMNC181732", quantity: 100 },
  { productCode: "DMNC181733", quantity: 2 },
  { productCode: "DMNC181734", quantity: 5 },
];
