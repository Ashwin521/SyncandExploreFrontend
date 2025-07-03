"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./TestimonialsSection.module.css";

const testimonials = [
  {
    id: 1,
    name: "Taylor",
    image: "/testimonial_profile1.jpg",
    review: "Our experience with Sync & Explore has been exceptional. The platform's ability to seamlessly match travel buddies and plan AI-powered itineraries made trip planning effortless. This smart and dependable tool has added great value to our travel journey, making exploration more exciting and stress-free.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah",
    image: "/testimonial_profile1.jpg",
    review: "Amazing platform! I found the perfect travel companion for my Europe trip. The AI recommendations were spot-on and helped us discover hidden gems we never would have found otherwise. Highly recommend this to any solo traveler looking for adventure.",
    rating: 5
  },
  {
    id: 3,
    name: "Michael",
    image: "/testimonial_profile1.jpg",
    review: "Sync & Explore revolutionized how I plan my trips. The ability to sync schedules with other travelers and get personalized recommendations based on our shared interests made our group trip to Japan absolutely incredible. Five stars!",
    rating: 5
  },
  {
    id: 4,
    name: "Emma",
    image: "/testimonial_profile1.jpg",
    review: "I was hesitant about traveling with strangers, but Sync & Explore's matching system is brilliant. I met lifelong friends on my Thailand adventure. The platform ensures compatibility and safety, making every trip memorable and worry-free.",
    rating: 5
  },
  {
    id: 5,
    name: "David",
    image: "/testimonial_profile1.jpg",
    review: "The best travel platform I've ever used! From finding compatible travel buddies to discovering affordable accommodations, Sync & Explore handles everything. The AI itinerary planning saved me hours of research. Can't wait for my next adventure!",
    rating: 5
  }
];

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section id="testimonials" className={styles.testimonialsSection}>
      <h2 className={styles.title}>What Our Early Users Say?</h2>
      <div className={styles.testimonialContainer}>
        <button className={styles.navButton} onClick={prevTestimonial} aria-label="Previous testimonial">
          <span className={styles.arrow}>‹</span>
        </button>
        
        <div className={styles.testimonialCard}>
          <div className={styles.userImageContainer}>
            <Image 
              src={current.image} 
              alt={current.name} 
              width={200} 
              height={200} 
              className={styles.userImage}
              sizes="(max-width: 480px) 100px, (max-width: 768px) 120px, (max-width: 992px) 180px, 200px"
              priority
            />
          </div>
          
          <div className={styles.testimonialContent}>
            <p className={styles.reviewText}>
              {current.review}
            </p>
            
            <div className={styles.rating}>
              {Array.from({ length: current.rating }).map((_, i) => (
                <span key={i} className={styles.star}>★</span>
              ))}
            </div>
            
            <span className={styles.userName}>{current.name}</span>
          </div>
        </div>
        
        <button className={styles.navButton} onClick={nextTestimonial} aria-label="Next testimonial">
          <span className={styles.arrow}>›</span>
        </button>
      </div>
    </section>
  );
}
