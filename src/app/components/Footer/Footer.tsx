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
        <Image 
          src="/mail_icon.svg" 
          alt="Email" 
          width={28} 
          height={28}
          className={styles.icon}
        />
        <Image 
          src="/calender_icon.svg" 
          alt="Calendar" 
          width={28} 
          height={28}
          className={styles.icon}
        />
        <Image 
          src="/message_icon.svg" 
          alt="Message" 
          width={28} 
          height={28}
          className={styles.icon}
        />
        <Image 
          src="/security_icon.svg" 
          alt="Security" 
          width={28} 
          height={28}
          className={styles.icon}
        />
        <Image 
          src="/timer_icon.svg" 
          alt="Timer" 
          width={28} 
          height={28}
          className={styles.icon}
        />
      </div>
      <p className={styles.copyright}>Copyright © Sync&Explore. All right reserved</p>
    </footer>
  );
}
