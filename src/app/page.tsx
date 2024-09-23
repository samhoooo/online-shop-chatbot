import styles from "./page.module.css";
import ProductListing from "./components/ProductListing";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ProductListing />
      </main>
    </div>
  );
}
