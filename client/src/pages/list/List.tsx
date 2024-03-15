import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import styles from "./list.module.css";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

interface LocationState {
  state: {
    date: [{ startDate?: Date; endDate?: Date; key?: string }];
    destination: string;
    options: {
      adult: number;
      children: number;
      room: number;
    };
  };
}

const List = () => {
  const location = useLocation() as LocationState;

  const [destination, setDestination] = useState(location.state?.destination);
  const [date, setDate] = useState(location.state?.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state?.options);

  const formattedStartDate = date?.[0]?.startDate
    ? format(date[0].startDate, "dd.MM.yyyy")
    : "";
  const formattedEndDate = date?.[0]?.endDate
    ? format(date[0].endDate, "dd.MM.yyyy")
    : "";
  return (
    <div className={styles.list}>
      <Navbar type="list" />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.search}>
            <h1 className={styles.title}>Search</h1>
            <div className={styles.searchItem}>
              <label htmlFor="">Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className={styles.searchItem}>
              <label htmlFor="">Check-in Date</label>
              <span
                onClick={() => setOpenDate(!openDate)}
              >{`${formattedStartDate} to ${formattedEndDate}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className={styles.searchItem}>
              <label htmlFor="">Options</label>
              <div className={styles.options}>
                <div className={styles.optionItem}>
                  <span className={styles.optionText}>
                    Min price <small>per night</small>
                  </span>
                  <input type="text" className={styles.optionInput} />
                </div>
                <div className={styles.optionItem}>
                  <span className={styles.optionText}>
                    Max price <small>per night</small>
                  </span>
                  <input type="text" className={styles.optionInput} />
                </div>
                <div className={styles.optionItem}>
                  <span className={styles.optionText}>Adult</span>
                  <input
                    type="number"
                    className={styles.optionInput}
                    placeholder={`${options?.adult}`}
                    min={1}
                  />
                </div>
                <div className={styles.optionItem}>
                  <span className={styles.optionText}>Children</span>
                  <input
                    type="number"
                    className={styles.optionInput}
                    placeholder={`${options?.children}`}
                    min={1}
                  />
                </div>
                <div className={styles.optionItem}>
                  <span className={styles.optionText}>Room</span>
                  <input
                    type="number"
                    className={styles.optionInput}
                    placeholder={`${options?.room}`}
                    min={1}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className={styles.result}>
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
