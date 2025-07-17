
import Logo from "./components/Logo/Logo";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";
import WhySection from "./components/WhySection/WhySection";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";
import WaitlistSection from "./components/WaitlistSection/WaitlistSection";
import Footer from "./components/Footer/Footer";
import styles from "./HeroSectionBox.module.css";

export default function Home() {
  return (
    <div className={styles.pageBackground}>

      <section className={styles.heroSectionBox}>

        <div className={styles.logoPosition}>
          <Logo />
        </div>
        <NavBar />
        <HeroSection />
      </section>
      
      <div className={styles.sectionContainer}>
        <WhySection />
      </div>
      
      <div className={styles.sectionContainer} style={{backgroundColor: '#FFFFFF'}}>
        <TestimonialsSection />
      </div>
      
      <div className={styles.sectionContainer}>
        <WaitlistSection />
      </div>
      
      <div className={styles.sectionContainer}>
        <Footer />
      </div>
    </div>
  );
}
