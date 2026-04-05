import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";

export default function Index() {
  const phrase =
    "Avis Media is a premier digital PR and video licensing agency bridging high-impact content with global reach.";
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <div id="about" ref={description} className={styles.description}>
      <div className={styles.body}>
        <p>
          {phrase.split(" ").map((word, index) => {
            return (
              <span key={index} className={styles.mask}>
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
          We specialize in video licensing, strategic digital PR, and content
          protection — empowering creators, broadcasters, and brands by securing
          their intellectual property while maximizing their digital footprint
          through strategic storytelling. Content is the currency of the digital
          age, and we deliver the results that matter.
        </motion.p>
      </div>
    </div>
  );
}
