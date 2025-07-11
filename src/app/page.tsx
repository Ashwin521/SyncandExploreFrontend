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
      {/* Header + Hero Section Combined */}
      <section className={styles.heroSectionBox}>
        {/* Logo top left */}
        <div className={styles.logoPosition}>
          <Logo />
        </div>
        {/* Centered Nav */}
        <NavBar />
        {/* Hero Section */}
        <HeroSection />
      </section>
      
      {/* Why Section */}
      <div className={styles.sectionContainer}>
        <WhySection />
      </div>
      
      {/* Testimonials Section */}
      <div className={styles.sectionContainer} style={{backgroundColor: '#FFFFFF'}}>
        <TestimonialsSection />
      </div>
      
      {/* Waitlist Section */}
      <div className={styles.sectionContainer}>
        <WaitlistSection />
      </div>
      
      {/* Footer Section */}
      <div className={styles.sectionContainer}>
        <Footer />
      </div>
    </div>
  );
}
