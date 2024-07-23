import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";
import Rounded from "../../common/RoundedButton";
export default function Index() {
  const phrase =
    "APCO’s public affairs heritage and shared passion for issues is at the core of our strategic mindset.";
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <div ref={description} className={styles.description}>
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
          We work with our clients to help them tell their stories through
          authentic voices of allies and partners to create action and authentic
          change in the world. Our deep bench of experts and partners from major
          business, financial, political and media capitals understand advocacy
          and gets results.
        </motion.p>
        <div data-scroll data-scroll-speed={0.1}>
          <Rounded className={styles.button}>
            <p>About us</p>
          </Rounded>
        </div>
      </div>
    </div>
  );
}
