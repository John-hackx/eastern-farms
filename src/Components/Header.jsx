import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

// import callIconBlack from "../assets/images/call-icon-black.png";
import callIconWhite from "../assets/images/call-icon-white.png";
import Logo from "./Logo";
import Menu from "./Menu";
import { useState } from "react";
function Header({ windowWidth }) {
  const [showLinks, setShowLinks] = useState(false);

  function handleShowLinks() {
    setShowLinks(true);
    console.log("show");
  }
  function handleHideLinks() {
    console.log("hide");
    setShowLinks(false);
  }

  return (
    <>
      <div className={styles.topBar}>
        <div className={styles.emailSection}>
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
        <div className={styles.phoneSection}>
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
      </div>
      <nav className={styles.nav}>
        {showLinks ? (
          <div onClick={handleHideLinks} className={styles.showIcon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </div>
        ) : (
          <div
            // role="button"
            onClick={handleShowLinks}
            className={styles.showIcon}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </div>
        )}
        {/* {showLinks && (
          
        )}
        {!showLinks && (
          
        )} */}
        <Logo />
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
        <div className={styles.callUsBar}>
          <div className={styles.callUs}>
            <img src={callIconWhite} alt="call-icon" />
            <p>(233) 55 288 3161</p>
          </div>
        </div>
        {windowWidth <= 768 && showLinks ? <Menu /> : ""}
      </nav>
    </>
  );
}

export default Header;
