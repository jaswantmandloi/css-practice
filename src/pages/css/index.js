import Head from "next/head";
import Link from "next/link";
import styles from "styles/css/index.module.css";

export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CSS Demos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.listContainer}>
        {listItems.map((item) => {
          return (
            <div key={item.id} className={styles.listItem}>
              <Link href={item.href}>
                <a>{item.name}</a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const listItems = [
  { href: "#", id: 1, name: "First" },
  { href: "#", id: 2, name: "second" },
  { href: "#", id: 3, name: "Third" },
  { href: "#", id: 4, name: "Forth" },
  { href: "#", id: 5, name: "Fifth" },
  { href: "#", id: 6, name: "Sixth" },
  { href: "#", id: 7, name: "Seventh" },
  { href: "#", id: 8, name: "Eighth" },
];
