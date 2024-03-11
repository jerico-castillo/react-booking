import styles from "./searchItem.module.css";

const SearchItem = () => {
  return (
    <div className={styles.searchItem}>
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className={styles.img}
      />
      <div className={styles.desc}>
        <h1 className={styles.title}>Tower Street Apartments</h1>
        <span className={styles.distance}>500m from center</span>
        <span className={styles.taxiOp}>Free airport taxi</span>
        <span className={styles.subTitle}>
          Studio Apartment with Air conditioning
        </span>
        <span className={styles.features}>
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className={styles.cancelOp}>Free cancellation </span>
        <span className={styles.cancelOpSubtitle}>
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className={styles.details}>
        <div className={styles.rating}>
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className={styles.detailTexts}>
          <span className={styles.price}>$112</span>
          <span className={styles.taxOp}>Includes taxes and fees</span>
          <button className={styles.checkButton}>See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
