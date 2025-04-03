import Footer from "../Components/Footer";
import Header from "../Components/Header";
import styles from "./ContactPage.module.css";
import facebookLogo from "../assets/images/facebook.png";
import twitterLogo from "../assets/images/twitter.png";
import youtubeLogo from "../assets/images/youtube.png";
import linkedinLogo from "../assets/images/linkedin.png";

function ContactPage({ windowWidth }) {
  return (
    <div className={styles.contactPage}>
      <Header windowWidth={windowWidth} />
      <div className={styles.contactContainer}>
        <div className={styles.left}>
          <div className={styles.getInTouchContainer}>
            <div className={styles.getInTouchHeader}>
              <p>Get In Touch</p>
              <span></span>
            </div>
            <div className={styles.getInTouchText}>
              <p>
                Have questions or need assistance? We're here to help! Reach out
                to us for inquiries, partnerships.
              </p>
            </div>
            <div className={styles.getInTouchContact}>
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
                <div className={styles.phoneDetails}>
                  <p className={styles.phoneDetailsTitle}>Phone</p>
                  <p>(233) 24 851 9174</p>
                </div>
              </div>
              <div className={styles.email}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="currentColor"
                >
                  <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280 320-200v-80L480-520 160-720v80l320 200Z" />
                </svg>
                <div className={styles.emailDetails}>
                  <p className={styles.emailDetailsTitle}>Email</p>
                  <p>easternfarms16@gmail.com</p>
                </div>
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
                <div className={styles.locationDetails}>
                  <p className={styles.locationDetailsTitle}>Address</p>
                  <p>15th Street Comm. 18 Tema - Ghana</p>
                </div>
              </div>
            </div>
            <div className={styles.getInTouchSocial}>
              <img src={facebookLogo} alt="facebook-logo" />
              <img src={youtubeLogo} alt="youtube-logo" />
              <img src={twitterLogo} alt="twitter-logo" />
              <img src={linkedinLogo} alt="linkedin-logo" />
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.contactFormContainer}>
            <div className={styles.formTitle}>
              <p>Contact Us</p>
            </div>
            <div className={styles.form}>
              <form>
                <input
                  type="text"
                  placeholder="Your name"
                  name="name"
                  required
                />
                <input type="text" placeholder="Email" name="email" required />
                <input type="phone" placeholder="Phone" name="phone" required />
                <textarea name="text-area" placeholder="Type your enquiry..." />
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
