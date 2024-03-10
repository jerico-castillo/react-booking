import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <Featured />
        <h1 className={styles.title}>Browse by property type</h1>
        <PropertyList />
      </div>
    </div>
  );
};

export default Home;
