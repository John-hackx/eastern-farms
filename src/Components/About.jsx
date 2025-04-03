import styles from "./About.module.css";
import aboutImage from "../assets/images-new/about-image3.jpg";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.aboutLeft}>
        <div className={styles.imageCard}>
          <img src={aboutImage} alt="About" />
        </div>
      </div>
      <div className={styles.aboutRight}>
        <h3>Production and Exports of</h3>
        <h2>quality agricultural products</h2>
        <p>
          From farm to global markets, <em>Eastern Farms</em> ensure top-quality
          crops through sustainable farming and strict quality control.
          Delivering fresh, nutritious produce worldwide, we are committed to
          providing our customers with the best possible experience, from start
          to finish.
        </p>
        <Link to="/about">
          <button className={styles.aboutLearnMore}>
            Learn More{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
              >
                <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
              </svg>
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default About;
