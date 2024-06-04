import Hero from "@/app/components/Hero";
import Mockups from "@/app/components/Mockups";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Mockups />
    </main>
  );
}
