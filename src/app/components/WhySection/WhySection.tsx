import Image from "next/image";
import styles from "./WhySection.module.css";

export default function WhySection() {
  return (
    <section id="features" className={styles.whySection}>
      <h2 className={styles.title}>Why Sync & Explore?</h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <Image src="/file.svg" alt="Sync Travel Dates" width={40} height={40} className={styles.cardIcon} />
          <span className={styles.cardTitle}>Sync Travel Dates</span>
        </div>
        <div className={styles.card}>
          <Image src="/globe.svg" alt="Explore Destinations" width={40} height={40} className={styles.cardIcon} />
          <span className={styles.cardTitle}>Explore Destinations</span>
        </div>
        <div className={styles.card}>
          <Image src="/next.svg" alt="Find Travel Buddies" width={40} height={40} className={styles.cardIcon} />
          <span className={styles.cardTitle}>Find Travel Buddies</span>
        </div>
        <div className={styles.card}>
          <Image src="/vercel.svg" alt="Affordable Stays" width={40} height={40} className={styles.cardIcon} />
          <span className={styles.cardTitle}>Affordable Stays</span>
        </div>
      </div>
    </section>
  );
}
