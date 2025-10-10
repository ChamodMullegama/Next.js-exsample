import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
             <h1>home page</h1>
          <Link href="/users">users</Link>     </main>
    </div>
  );
}
