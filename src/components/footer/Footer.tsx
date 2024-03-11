import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.lists}>
        <ul className={styles.list}>
          <li className={styles.item}>Countries</li>
          <li className={styles.item}>Regions</li>
          <li className={styles.item}>Cities</li>
          <li className={styles.item}>Districts</li>
          <li className={styles.item}>Airports</li>
          <li className={styles.item}>Hotels</li>
        </ul>
        <ul className={styles.list}>
          <li className={styles.item}>Homes </li>
          <li className={styles.item}>Apartments </li>
          <li className={styles.item}>Resorts </li>
          <li className={styles.item}>Villas</li>
          <li className={styles.item}>Hostels</li>
          <li className={styles.item}>Guest houses</li>
        </ul>
        <ul className={styles.list}>
          <li className={styles.item}>Unique places to stay </li>
          <li className={styles.item}>Reviews</li>
          <li className={styles.item}>Unpacked: Travel articles </li>
          <li className={styles.item}>Travel communities </li>
          <li className={styles.item}>Seasonal and holiday deals </li>
        </ul>
        <ul className={styles.list}>
          <li className={styles.item}>Car rental </li>
          <li className={styles.item}>Flight Finder</li>
          <li className={styles.item}>Restaurant reservations </li>
          <li className={styles.item}>Travel Agents </li>
        </ul>
        <ul className={styles.list}>
          <li className={styles.item}>Curtomer Service</li>
          <li className={styles.item}>Partner Help</li>
          <li className={styles.item}>Careers</li>
          <li className={styles.item}>Sustainability</li>
          <li className={styles.item}>Press center</li>
          <li className={styles.item}>Safety Resource Center</li>
          <li className={styles.item}>Investor relations</li>
          <li className={styles.item}>Terms & conditions</li>
        </ul>
      </div>
      <div className={styles.text}>Copyright © 2024 Simon</div>
    </div>
  );
};

export default Footer;
