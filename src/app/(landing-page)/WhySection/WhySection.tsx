import Image from "next/image";
import styles from "./WhySection.module.css";

export default function WhySection() {
  return (
    <section id="features" className={styles.whySection}>
      <h2 className={styles.title}>Why Sync & Explore?</h2>
      
      <div className={styles.airplanePath}>
        <Image
          src="/Vector.svg" 
          alt="Airplane"
          fill
          className={styles.airplane}
        />
      </div>
      
      <div className={styles.cards}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Sync<br />Travel Dates</h3>
          <div className={styles.cardIconWrapper}>
            <Image 
              src="/calendar.png" 
              alt="Calendar Icon" 
              width={48} 
              height={48} 
              className={styles.cardIcon} 
            />
          </div>
        </div>
        
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Explore<br />Destinations</h3>
          <div className={styles.cardIconWrapper}>
            <Image 
              src="/worldmap.png" 
              alt="Globe Icon" 
              width={48} 
              height={48} 
              className={styles.cardIcon} 
            />
          </div>
        </div>
        
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Find Travel<br />Buddies</h3>
          <div className={styles.cardIconWrapper}>
            <Image 
              src="/travelbag.png" 
              alt="User Icon" 
              width={48} 
              height={48} 
              className={styles.cardIcon} 
            />
          </div>
        </div>
        
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Affordable<br />Stays</h3>
          <div className={styles.cardIconWrapper}>
            <Image 
              src="/stay_home.png" 
              alt="House Icon" 
              width={48} 
              height={48} 
              className={styles.cardIcon} 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
