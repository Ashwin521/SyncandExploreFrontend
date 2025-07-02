import Image from "next/image";
import styles from "./TestimonialsSection.module.css";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className={styles.testimonialsSection}>
      <h2 className={styles.title}>What Our Early Users Say?</h2>
      <div className={styles.card}>
        <button className={`${styles.arrowBtn} ${styles.arrowLeft}`}>
          <span className="text-2xl">&#8592;</span>
        </button>
        <div className="flex flex-col md:flex-row md:items-center gap-6 w-full justify-center">
          <div className={styles.userImg}>
            <Image src="/file.svg" alt="User" width={128} height={128} style={{objectFit: "cover", width: "100%", height: "100%"}} />
          </div>
          <div className="flex-1 flex flex-col items-center md:items-start">
            <p className="text-[#444] text-lg mb-2 text-center md:text-left">
              Our experience with Sync & Explore has been exceptional. The platform's ability to seamlessly match travel buddies and plan AI-powered itineraries made trip planning effortless. This smart and dependable tool has added great value to our travel journey, making exploration more exciting and stress-free.
            </p>
            <div className={styles.stars}>
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} style={{color: "#f7b32b", fontSize: "1.25rem"}}>★</span>
              ))}
            </div>
            <span className={styles.userName}>Taylor</span>
          </div>
        </div>
        <button className={`${styles.arrowBtn} ${styles.arrowRight}`}>
          <span className="text-2xl">&#8594;</span>
        </button>
      </div>
    </section>
  );
}
