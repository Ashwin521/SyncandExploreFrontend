import HeroImages from "../HeroImages/HeroImages";
import styles from "./HeroSection.module.css";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.title}>
          We Sync,AI Plans.<br />You Explore
        </h1>
        <p className={styles.subtitle}>
          AI-powered travel buddy matching<br /> and itinerary planning — so you travel smart, not hard.
        </p>
        <div className={styles.buttonRow}>
          <Link href="/login">
            <button className={styles.primaryBtn}>Join waitlist</button>
          </Link>
          <button className={styles.secondaryBtn}>See how it works</button>
        </div>
      </div>
      <HeroImages />
    </div>
  );
}
