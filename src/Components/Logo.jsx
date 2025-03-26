import logo from "../assets/images/logo-1.png";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="logo" />
      <p>
        <span>eastern</span>farms
      </p>
    </div>
  );
}

export default Logo;
