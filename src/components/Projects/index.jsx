'use client';
import styles from './style.module.scss'
import { useState } from 'react';
import Project from './components/project';
import { motion } from 'framer-motion';
import Rounded from '../../common/RoundedButton';

const projects = [
  {
    title: "Video Licensing",
    description: "From rights acquisition to global distribution, we manage the full lifecycle of viral and professional video content across all major platforms."
  },
  {
    title: "Digital PR Campaigns",
    description: "Data-driven campaigns that enhance brand reputation, secure top-tier media placements, and drive meaningful engagement."
  },
  {
    title: "Content Protection",
    description: "We safeguard your digital assets, ensuring creative work is used legally and remains a revenue-generating asset."
  },
  {
    title: "Brand Growth Strategy",
    description: "Combining the visual power of video with earned media credibility to scale your online presence and reach the right audience."
  }
]

const scaleAnimation = {
    initial: {scale: 0, x:"-50%", y:"-50%"},
    enter: {scale: 1, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
    closed: {scale: 0, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
}

export default function Home() {

  const [modal, setModal] = useState({active: false, index: 0})
  const { active, index } = modal;

  const manageModal = (active, index) => {
    setModal({active, index})
  }

  return (
  <section id="work" className={styles.projects}>
    <div className={styles.sectionHeader}>
      <p className={styles.label}>Our Expertise</p>
      <h2>What We Do</h2>
    </div>
    <div className={styles.body}>
      {
        projects.map( (project, i) => {
          return <Project index={i} title={project.title} description={project.description} manageModal={manageModal} key={i}/>
        })
      }
    </div>
    <Rounded
      onClick={() => {
        const el = document.getElementById("contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <p>Get in touch</p>
    </Rounded>
    <motion.div variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className={styles.modalContainer}>
        <div style={{top: index * -100 + "%"}} className={styles.modalSlider}>
        {
            projects.map( (project, i) => {
            return (
              <div className={styles.modal} key={`modal_${i}`}>
                <p>{project.description}</p>
              </div>
            )
            })
        }
        </div>
    </motion.div>
  </section>
  )
}
