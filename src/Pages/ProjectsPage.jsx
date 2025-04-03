import Header from "../Components/Header";
import styles from "./ProjectsPage.module.css";
import facebookLogo from "../assets/images/facebook.png";
import twitterLogo from "../assets/images/twitter.png";
import youtubeLogo from "../assets/images/youtube.png";
import linkedinLogo from "../assets/images/linkedin.png";
import eggsImage from "../assets/images/eggs.jpg";
import Footer from "../Components/Footer";

function ProjectsPage({ windowWidth }) {
  return (
    <div className={styles.projectsPage}>
      <Header windowWidth={windowWidth} />
      <div className={styles.projectsContainer}>
        <div className={styles.projectsHeader}>
          <div className={styles.headerLeft}>
            <p>Our Projects</p>
            <h3>Creating Impacts in Global Food Market</h3>
          </div>
          <div className={styles.headerRight}>
            <img src={facebookLogo} alt="facebook-logo" />
            <img src={youtubeLogo} alt="youtube-logo" />
            <img src={twitterLogo} alt="twitter-logo" />
            <img src={linkedinLogo} alt="linkedin-logo" />
          </div>
        </div>
        <div className={styles.projectsContent}>
          <div className={styles.projectsContentContainer}>
            <div className={styles.projectsContentSubContainer}>
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function ProjectCard() {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectImage}>
        <img src={eggsImage} alt="eggs-image" />
      </div>
      <div className={styles.projectDescription}>
        <div className={styles.title}>
          <h3>Large-scale Cocoa Plantation</h3>
        </div>
        <div className={styles.description}>
          <p>
            Developed a 500-hectare cocoa plantation, producing high-quality
            cocoa beans for export to international market.
          </p>
        </div>
        <div className={styles.location}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="currentColor"
          >
            <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z" />
          </svg>
          <p>Adeiso - Eastern Region</p>
        </div>
        <div className={styles.date}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="currentColor"
          >
            <path d="M480-400q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Z" />
          </svg>
          <p>Jan - March 2022</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
