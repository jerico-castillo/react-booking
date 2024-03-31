import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { useAppSelector } from "../../typedHooks/hooks";

const Header = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className={styles.logo}>Simon</span>
        </Link>
        {user ? (
          user.username
        ) : (
          <div className={styles.items}>
            <button className={styles.button}>Register</button>
            <button className={styles.button}>Login</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
