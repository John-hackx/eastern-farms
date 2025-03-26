import styles from "./Footer.module.css";
import Logo from "./Logo";
import logo from "../assets/images/logo-1.png";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.footerAbout}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
            <p>
              <span>eastern</span>farms
            </p>
          </div>
          <div className={styles.footerAboutText}>
            <p>
              We are a small but dedicated team producing and exporting
              high-quality crops using sustainable farming practices. Our
              mission is to deliver fresh, nutritious, and eco-friendly
              agricultural products to global markets.
            </p>
          </div>
          <div className={styles.footerAboutIcons}>
            <img
              src="https://img.icons8.com/ios-glyphs/30/000000/facebook-new.png"
              alt="facebook"
            />
            <img
              src="https://img.icons8.com/ios-glyphs/30/000000/instagram-new.png"
              alt="instagram"
            />
            <img
              src="https://img.icons8.com/ios-glyphs/30/000000/twitter.png"
              alt="twitter"
            />
            <img
              src="https://img.icons8.com/ios-glyphs/30/000000/linkedin.png"
              alt="linkedin"
            />
          </div>
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.linksLeft}>
            <p>Quick Links</p>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className={styles.linksRight}>
            <p>Our Main Office</p>
            <ul>
              <li>Eastern Farms Co.</li>
              <li>15th Main Street</li>
              <li>Accra, Ghana</li>
              <li>+233-059-272-6711</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>
          Copyright{" "}
          <span>
            <svg
              fill="#000000"
              height="800px"
              width="800px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 367.467 367.467"
              xml:space="preserve"
            >
              <g>
                <path
                  d="M183.73,0.018C82.427,0.018,0,82.404,0,183.733c0,101.289,82.427,183.716,183.73,183.716
		c101.315,0,183.737-82.427,183.737-183.716C367.467,82.404,285.045,0.018,183.73,0.018z M183.73,326.518
		c-78.743,0-142.798-64.052-142.798-142.784c0-78.766,64.055-142.817,142.798-142.817c78.752,0,142.807,64.052,142.807,142.817
		C326.536,262.466,262.481,326.518,183.73,326.518z"
                />
                <path
                  d="M244.036,217.014c-11.737,20.141-33.562,32.635-56.956,32.635c-36.329,0-65.921-29.585-65.921-65.915
		c0-36.36,29.592-65.955,65.921-65.955c23.395,0,45.219,12.54,56.956,32.641l1.517,2.627h44.28l-2.658-7.129
		c-7.705-20.413-21.225-37.769-39.122-50.157c-17.942-12.42-39.017-19.009-60.973-19.009c-58.981,0-106.946,48.006-106.946,106.982
		c0,58.98,47.965,106.941,106.946,106.941c21.956,0,43.03-6.567,60.973-19.006c17.897-12.391,31.417-29.741,39.122-50.154
		l2.658-7.133h-44.28L244.036,217.014z"
                />
              </g>
            </svg>
          </span>{" "}
          2025 Eastern Farms Co. Tema - Ghana All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
