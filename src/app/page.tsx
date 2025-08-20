import Logo from "./(landing-page)/Logo";
import NavBar from "./(landing-page)/NavBar";
import HeroSection from "./(landing-page)/HeroSection";
import WhySection from "./(landing-page)/WhySection";
import TestimonialsSection from "./(landing-page)/TestimonialsSection";
import WaitlistSection from "./(landing-page)/WaitlistSection";
import Footer from "./(landing-page)/Footer";
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
