import { Link } from "react-router-dom";
import { Hotel } from "../../types/hotelType";
import styles from "./searchItem.module.css";

const SearchItem = (props: { item: Hotel }) => {
  const { photos, name, desc, distance, rating, cheapestPrice, _id, ...other } =
    props.item;

  return (
    <div className={styles.searchItem}>
      {photos && <img src={photos[0]} alt="" className={styles.img} />}
      <div className={styles.desc}>
        <h1 className={styles.title}>{name}</h1>
        <span className={styles.distance}>{distance}m from center</span>
        <span className={styles.taxiOp}>Free airport taxi</span>
        <span className={styles.subTitle}>
          Studio Apartment with Air conditioning
        </span>
        <span className={styles.features}>{desc}</span>
        <span className={styles.cancelOp}>Free cancellation </span>
        <span className={styles.cancelOpSubtitle}>
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className={styles.details}>
        {rating && (
          <div className={styles.rating}>
            <span>Excellent</span>
            <button>{rating}</button>
          </div>
        )}
        <div className={styles.detailTexts}>
          <span className={styles.price}>${cheapestPrice}</span>
          <span className={styles.taxOp}>Includes taxes and fees</span>
          <Link to={`/hotels/${_id}`}>
            <button className={styles.checkButton}>See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
