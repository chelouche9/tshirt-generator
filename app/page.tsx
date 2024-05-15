import Hero from "@/app/components/Hero";
import Design from "@/app/components/Design";
import Mockups from "@/app/components/Mockups";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Mockups />
      <Design />
    </main>
  );
}
