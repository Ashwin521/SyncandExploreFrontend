import Image from "next/image";
import styles from "./HeroImages.module.css";

export default function HeroImages() {
  return (
    <div className={styles.container}>
      <div className={styles.imageGroup}>
        <div className={styles.topImage}>
          <Image
            src="/lakes.png"
            alt="Lakes"
            fill
            style={{ objectFit: "cover" }}
            className={styles.image}
          />
        </div>
        <div className={styles.bottomImage}>
          <Image
            src="/mountains.png"
            alt="Mountains"
            fill
            style={{ objectFit: "cover" }}
            className={styles.image}
          />
        </div>
        <div className={styles.calendarIconWrap}>
          <div className={styles.calendarIcon}>
            <Image
              src="/icon.png"
              alt="Calendar Icon"
              fill  
              style={{ objectFit: "cover" }}
              className={styles.icon}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
