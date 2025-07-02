import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <a href="#">Service</a>
        <a href="#">Support</a>
        <a href="#">Company</a>
        <a href="#">Legal</a>
        <a href="#">Join Us</a>
      </div>
      <div className={styles.icons}>
        <span>✉️</span>
        <span>🌐</span>
        <span>📞</span>
        <span>📍</span>
      </div>
      <div className={styles.logoRow}>
        <Image src="/globe.svg" alt="Logo" width={32} height={32} />
        <span className="font-bold text-lg">Sync & Explore</span>
      </div>
      <p className={styles.copyright}>Copyright © Sync&Explore. All right reserved</p>
    </footer>
  );
}
