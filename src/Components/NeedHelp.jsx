import styles from "./NeedHelp.module.css";
import helpImage from "../assets/images/service-2-new.jpg";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const MDiv = motion.div;

function NeedHelp() {
  return (
    <MDiv
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className={styles.needHelp}
    >
      <div className={styles.subContainer}>
        <div className={styles.left}>
          <MDiv className={styles.helpTitle}>
            <p>Need any help?</p>
          </MDiv>
          <div className={styles.helpText}>
            <p>
              Have questions or need assistance? Our team is here to help! Get
              in touch with us for expert support and solutions
            </p>
          </div>
          <div className={styles.phone}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12Z" />
            </svg>
            <p>(233) 55 288 3161</p>
          </div>
          <div className={styles.address}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
            </svg>
            <p>15th Street, Lashibi Tema</p>
          </div>
          <div className={styles.email}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
            </svg>
            <p>easternfarms16@gmail.com</p>
          </div>
          <div className={styles.button}>
            <Link to="/contact">
              <button>Drop a Message</button>
            </Link>
          </div>
        </div>
        <div className={styles.right}>
          <img src={helpImage} alt="Need Help" />
        </div>
      </div>
    </MDiv>
  );
}

export default NeedHelp;
