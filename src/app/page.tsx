import Logo from "./components/Logo";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import WhySection from "./components/WhySection";
import TestimonialsSection from "./components/TestimonialsSection";
import WaitlistSection from "./components/WaitlistSection";
import Footer from "./components/Footer";
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
      <WhySection />
      <TestimonialsSection />
      <WaitlistSection />
      <Footer />
    </div>
  );
}
