'use client';
import styles from './style.module.scss';
import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';

const services = [
  {
    num: "01",
    title: "Video Licensing & Monetization",
    description: "We manage the lifecycle of viral and professional video content. From rights acquisition to global distribution, we ensure your content is protected and performing across all major platforms.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="8" width="32" height="24" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <polygon points="17,14 17,26 27,20" fill="currentColor"/>
      </svg>
    )
  },
  {
    num: "02",
    title: "Strategic Digital PR",
    description: "We build authority through data-driven campaigns that enhance brand reputation, secure top-tier media placements, and drive meaningful engagement across digital channels.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="16" r="6" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 34c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M28 10l4-4M32 10l-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    num: "03",
    title: "Content Protection",
    description: "In an era of rapid sharing, we safeguard your digital assets, ensuring that your creative work is used legally and remains a revenue-generating asset.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4L6 12v8c0 9.33 5.97 18.06 14 20 8.03-1.94 14-10.67 14-20v-8L20 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M15 20l3.5 3.5L26 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    num: "04",
    title: "Brand Growth",
    description: "By combining the visual power of video with the credibility of earned media, we help businesses scale their online presence and connect with the right audience.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 32L14 20L22 26L34 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M28 8h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
];

export default function Services() {
  const container = useRef(null);
  const isInView = useInView(container, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={container} className={styles.services}>
      <div className={styles.header}>
        <motion.p
          className={styles.label}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          What We Do
        </motion.p>
        <motion.h2
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Our Services
        </motion.h2>
      </div>
      <div className={styles.grid}>
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={styles.card}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
          >
            <div className={styles.cardTop}>
              <div className={styles.icon}>{service.icon}</div>
              <span className={styles.num}>{service.num}</span>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className={styles.line}></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
