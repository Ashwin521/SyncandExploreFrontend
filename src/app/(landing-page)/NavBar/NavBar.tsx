"use client";

import { useState } from "react";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <nav className={styles.navBarWrapper}>
      <button
        className={styles.hamburger}
        aria-label="Open menu"
        onClick={() => setSidebarOpen(true)}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
      <ul className={styles.navList}>
        <li><a href="#">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      {sidebarOpen && (
        <>
          <div className={styles.overlay} onClick={() => setSidebarOpen(false)} />
          <aside className={styles.sidebar}>
            <button
              className={styles.closeBtn}
              aria-label="Close menu"
              onClick={() => setSidebarOpen(false)}
            >
              ×
            </button>
            <ul className={styles.sidebarNavList}>
              <li><a href="#" onClick={() => setSidebarOpen(false)}>Home</a></li>
              <li><a href="#features" onClick={() => setSidebarOpen(false)}>Features</a></li>
              <li><a href="#testimonials" onClick={() => setSidebarOpen(false)}>Testimonials</a></li>
              <li><a href="#contact" onClick={() => setSidebarOpen(false)}>Contact</a></li>
            </ul>
          </aside>
        </>
      )}
    </nav>
  );
}
