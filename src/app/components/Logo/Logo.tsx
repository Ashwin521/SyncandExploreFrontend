import Image from "next/image";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Image
        src="/logo.png"
        alt="Sync & Explore Logo"
        fill
        sizes="(max-width: 600px) 100vw, 130px"
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}
