import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { slide, scale } from '../../animation';

export default function Index({data, isActive, setSelectedIndicator, closeMenu}) {

    const { title, href, index} = data;

    const handleClick = () => {
      if (closeMenu) closeMenu();
      setTimeout(() => {
        if (href === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.getElementById(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 800);
    };

    return (
      <motion.div
        className={styles.link}
        onMouseEnter={() => {setSelectedIndicator(href)}}
        custom={index}
        variants={slide}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <motion.div
          variants={scale}
          animate={isActive ? "open" : "closed"}
          className={styles.indicator}>
        </motion.div>
        <a onClick={handleClick}>{title}</a>
      </motion.div>
    )
}
