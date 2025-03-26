import styles from "./NewsLetter.module.css";

function NewsLetter() {
  return (
    <div className={styles.newsletter}>
      <div className={styles.left}>
        <h3>Newsletter - Stay Tuned and Get the Latest Update</h3>
        <p>Provide your email to subscribe now!</p>
      </div>
      <div className={styles.right}>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default NewsLetter;
