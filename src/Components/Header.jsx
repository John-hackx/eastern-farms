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
