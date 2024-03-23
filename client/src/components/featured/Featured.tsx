import { useQuery } from "@tanstack/react-query";
import styles from "./featured.module.css";
import { fetchHotelCountByCity } from "../../hooks/http";

const Featured = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["hotelsByCity"],
    queryFn: () =>
      fetchHotelCountByCity("/hotels/countByCity?cities=berlin,madrid,london"),
  });

  let content;

  if (isPending) {
    content = <p>Loading please wait</p>;
  }

  if (data) {
    content = (
      <>
        <div className={styles.item}>
          <img
            src="https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className={styles.img}
          />
          <div className={styles.titles}>
            <h1>Berlin</h1>
            <h2>{data[0]} properties</h2>
          </div>
        </div>
        <div className={styles.item}>
          <img
            src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className={styles.img}
          />
          <div className={styles.titles}>
            <h1>Madrid</h1>
            <h2>{data[1]} properties</h2>
          </div>
        </div>
        <div className={styles.item}>
          <img
            src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className={styles.img}
          />
          <div className={styles.titles}>
            <h1>London</h1>
            <h2>{data[2]} properties</h2>
          </div>
        </div>
      </>
    );
  }
  return <div className={styles.featured}>{content}</div>;
};

export default Featured;
