import MailList from "../../components/mailList/MailList";
import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import styles from "./home.module.css";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <Featured />
        <h1 className={styles.title}>Browse by property type</h1>
        <PropertyList />
        <h1 className={styles.title}>Homes guests love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
