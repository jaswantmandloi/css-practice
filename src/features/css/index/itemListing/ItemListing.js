import styles from "./ItemListing.module.scss";

export default function Index({ items, heading }) {
  return (
    <div className={styles.category}>
      <h1>{heading}</h1>
      <div className={styles.items}>
        {items.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.image} />
              <div>{item.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
