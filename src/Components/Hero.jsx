import styles from "./Hero.module.css";
import heroVideo from "../assets/images/hero-video-4.mp4";

function Hero() {
  return (
    <div className={styles.heroSection}>
      <video
        className={styles.video}
        autoPlay
        loop
        muted
        playsInline
        src={heroVideo}
        type="video/mp4"
      />
      <div className={styles.dim}></div>
      <div className={styles.prevBtn}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="currentColor"
        >
          <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
        </svg>
      </div>
      <div className={styles.nextBtn}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="currentColor"
        >
          <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
        </svg>
      </div>
      <div className={styles.heroContent}>
        <h2>Agricultural Solution</h2>
        <p>
          Innovative agricultural solutions designed to boost productivity,
          sustainability, and efficiency. From smart farming technologies to
          eco-friendly practices, we help farmers cultivate success.
        </p>
        <button>
          Explore Our Services{" "}
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
      </div>
    </div>
  );
}

export default Hero;
