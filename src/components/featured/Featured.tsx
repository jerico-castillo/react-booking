import styles from "./featured.module.css";

const Featured = () => {
  return (
    <div className={styles.featured}>
      <div className={styles.item}>
        <img
          src="https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className={styles.img}
        />
        <div className={styles.titles}>
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className={styles.item}>
        <img
          src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className={styles.img}
        />
        <div className={styles.titles}>
          <h1>Austin</h1>
          <h2>532 properties</h2>
        </div>
      </div>
      <div className={styles.item}>
        <img
          src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className={styles.img}
        />
        <div className={styles.titles}>
          <h1>Reno</h1>
          <h2>533 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
