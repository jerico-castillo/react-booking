import Navbar from "../../components/navbar/Navbar";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}></div>
    </div>
  );
};

export default Home;
