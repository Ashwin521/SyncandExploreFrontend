"use client";

import Image from "next/image";
import styles from "./WaitlistSection.module.css";
import { FormEvent, useState } from "react";

export default function WaitlistSection() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Joining waitlist:', { email, name });
    
    // Reset form
    setEmail('');
    setName('');
    
    // Show success message or redirect
    alert('Thanks for joining our waitlist!');
  };

  return (
    <section className={styles.waitlistSection}>
      <div className={styles.left}>
        <h2 className={styles.title}>Be Part of the Future of Travel</h2>
        <p className={styles.subtitle}>Get early access to exclusive AI-powered features.</p>
        
        <Image 
          src="/Vector.svg" 
          alt="Airplane" 
          width={100} 
          height={100} 
          className={styles.airplane} 
        />
        
        <div className={styles.logoRow}>
          <Image src="/logo.svg" alt="logo" width={450} height={320} />
        </div>
      </div>
      
      <div className={styles.right}>
        <Image 
          src="/wait_section.png" 
          alt="Background" 
          fill 
          className={styles.bgImage} 
        />
        <form className={styles.form} onSubmit={handleSubmit}>
          <h3 className={styles.formTitle}>Join Waitlist</h3>
          <input 
            type="email" 
            placeholder="Your Email ID" 
            className={styles.input} 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            type="text" 
            placeholder="Your Name" 
            className={styles.input} 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <button type="submit" className={styles.button}>Join Waitlist</button>
        </form>
      </div>
    </section>
  );
}
