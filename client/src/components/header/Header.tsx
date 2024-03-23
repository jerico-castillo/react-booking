import { Link } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className={styles.logo}>Simon</span>
        </Link>
        <div className={styles.items}>
          <button className={styles.button}>Register</button>
          <button className={styles.button}>Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
