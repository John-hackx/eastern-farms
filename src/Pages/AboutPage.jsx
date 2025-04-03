import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import styles from "./AboutPage.module.css";
import Header from "../Components/Header";
import aboutImage from "../assets/images-new/about-image 4.jpg";
import clsx from "clsx";
import LatestBlog from "../Components/LatestBlog";
import Footer from "../Components/Footer";
import TeamMembers from "../Components/TeamMembers";

const MDiv = motion.div;

function AboutPage({ windowWidth }) {
  return (
    <div className={styles.aboutPage}>
      <Header windowWidth={windowWidth} />
      <div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className={styles.aboutContainer}
      >
        <div className={styles.left}>
          <div className={styles.aboutBox}>
            <div className={styles.aboutImage}>
              <img src={aboutImage} alt="about-image" />
            </div>
            <div className={styles.aboutContent}>
              <div className={styles.contentHeader}>
                <p>ABOUT US</p>
                <h3>Produce, Process and Export Agricultural Products</h3>
              </div>
              <div className={styles.contentText}>
                <p>
                  With a strong logistics and distribution network, we
                  efficiently export our crops to global markets, delivering
                  premium agricultural products that meet the needs of
                  consumers, retailers, and businesses worldwide. At Eastern
                  Farms, we are dedicated to not only feeding nations but also
                  supporting local farmers, strengthening communities, and
                  advancing sustainable agriculture for a better future.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.missionBox}>
            <div className={styles.missionHeader}>
              <div
                className={clsx(styles.headerActive, styles.missionHeaderLeft)}
              >
                <p>Our Mission</p>
              </div>
              <div className={clsx(styles.missionHeaderRight)}>
                <p>Our Vision</p>
              </div>
            </div>
            <div className={clsx(styles.missionText)}>
              <p>
                From farm to global markets, Eastern Farms ensures top-quality
                crops through sustainable farming and strict quality control.
                Based in Ghana, we cultivate our produce across various regions
                of the country, leveraging diverse climates to grow the finest
                agricultural products. Delivering fresh, nutritious produce
                worldwide, we are committed to providing our customers with the
                best possible experience—from cultivation to export—ensuring
                excellence at every stage. 🌍🌱
              </p>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <LatestBlog />
        </div>
      </div>
      <TeamMembers />
      <Footer />
    </div>
  );
}

export default AboutPage;
