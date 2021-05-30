import styles from "./Table.module.scss";

export default function Index({ headings, rows }) {
  return (
    <div className={styles.table}>
      <div className={styles.headerRow}>
        {headings.map((headingCell, index) => {
          return (
            <div key={index} className={styles.headerCell}>
              {headingCell}
            </div>
          );
        })}
      </div>
      <div className={styles.rows}>
        {rows.map((row, rowIndex) => {
          return (
            <div key={rowIndex} className={styles.row}>
              {row.map((cell, cellIndex) => {
                return (
                  <div key={cellIndex} className={styles.rowCell}>
                    {cell}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
