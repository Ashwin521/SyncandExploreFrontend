import Image from "next/image";
import styles from "./WaitlistSection.module.css";

export default function WaitlistSection() {
  return (
    <section className={styles.waitlistSection}>
      <div className={styles.left}>
        <h2 className={styles.title}>Be Part of the Future of Travel</h2>
        <p className={styles.subtitle}>Get early access to exclusive AI-powered features.</p>
        <div className={styles.logoRow}>
          <Image src="/globe.svg" alt="Logo" width={48} height={48} />
          <span style={{ color: "#1bb6c7", fontWeight: 700, fontSize: "1.25rem", marginLeft: "0.5rem" }}>Sync & Explore</span>
        </div>
      </div>
      <div className={styles.right}>
        <form className={styles.form}>
          <h3 className={styles.formTitle}>Join Waitlist</h3>
          <input type="email" placeholder="Your Email ID" className={styles.input} />
          <input type="text" placeholder="Your Name" className={styles.input} />
          <button className={styles.button}>Join Waitlist</button>
        </form>
      </div>
      <Image src="/window.svg" alt="Background" fill className={styles.bgImage} />
    </section>
  );
}
