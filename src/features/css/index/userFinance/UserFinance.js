import styles from "./UserFinance.module.scss";

import Table from "features/css/shared/table";

export default function Index() {
  return (
    <div className={styles.tableWrapper}>
      <div className={styles.table}>
        <Table headings={tableHeader} rows={tableRows} />
      </div>
    </div>
  );
}

const tableHeader = [
  <div key="categorySaving" className={styles.collapser}>
    <div>&#8593;</div>
    <div>Category Savings:</div>
  </div>,
  "Business Essentials $21",
  "Facilities $5",
  "Furniture $93",
  "Print / Promo $0",
  "Tech $0",
];

const tableRows = [
  ["Premium:", "$2", "$5", "$5", "$0", "$0"],
  ["Contract:", "$2", "$5", "$5", "$0", "$0"],
];
