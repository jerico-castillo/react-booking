import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <Featured />
      </div>
    </div>
  );
};

export default Home;
