import Navbar from "../../components/navbar/Navbar";
import styles from "./hotel.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchHotelByHotelId } from "../../hooks/hotelApis";
import { useAppSelector } from "../../typedHooks/hooks";
import { dayDifference, getDateInMilliseconds } from "../../utils/helpers";

const Hotel = () => {
  const [slideNumber, setslideNumber] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const { hotelId } = useParams();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["hotelsById", hotelId],
    queryFn: () => fetchHotelByHotelId(`/hotels/${hotelId}`),
  });

  const dates = useAppSelector((state) => state.search.dates);
  const options = useAppSelector((state) => state.search.options);

  const endDate = getDateInMilliseconds(dates[0].endDate);
  const startDate = getDateInMilliseconds(dates[0].startDate);
  const days = dayDifference(endDate, startDate);
  const handleOpen = (index: number) => {
    setslideNumber(index);
    setOpen(true);
  };

  const handleMove = (direction: string) => {
    let newSlideNumber;

    if (direction === "left") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setslideNumber(newSlideNumber);
  };

  let content;

  if (isPending) {
    content = <p>Loading please wait</p>;
  }

  if (isError) {
    content = <p>Error occur!</p>;
  }

  if (data) {
    content = (
      <div className={styles.wrapper}>
        <button className={styles.bookNow}>Reserve or Book Now!</button>
        <h1 className={styles.mainTitle}>{data.name}</h1>
        <div className={styles.address}>
          <FontAwesomeIcon icon={faLocationDot} />
          <span>{data.address}</span>
        </div>
        <span className={styles.distance}>
          Excellent location – {data.distance}m from center
        </span>
        <span className={styles.priceHighlight}>
          Book a stay over ${data.cheapestPrice} at this property and get a free
          airport taxi
        </span>
        <div className={styles.images}>
          {data.photos?.map((photo, index) => (
            <div className={styles.imgWrapper} id={data._id}>
              <img
                onClick={() => handleOpen(index)}
                src={photo}
                alt=""
                className={styles.hotelImg}
              />
            </div>
          ))}
        </div>
        <div className={styles.details}>
          <div className={styles.texts}>
            <h1 className={styles.title}>{data.title}</h1>
            <p className={styles.desc}>{data.desc}</p>
          </div>
          <div className={styles.price}>
            <h1>Perfect for a 9-night stay!</h1>
            <span>
              Located in the real heart of Krakow, this property has an
              excellent location score of 9.8!
            </span>
            <h2>
              <b>${days * data.cheapestPrice * options.room}</b> ({days}nights)
            </h2>
            <button>Reserve or Book Now!</button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.hotel}>
      <Navbar type="list" />
      {open && (
        <div className={styles.slider}>
          <FontAwesomeIcon
            icon={faCircleXmark}
            className={styles.close}
            onClick={() => setOpen(false)}
          />
          <FontAwesomeIcon
            icon={faCircleArrowLeft}
            className={styles.arrow}
            onClick={() => handleMove("left")}
          />
          <div className={styles.sliderWrapper}>
            {data?.photos && (
              <img
                src={data.photos[slideNumber]}
                alt=""
                className={styles.sliderImg}
              />
            )}
          </div>
          <FontAwesomeIcon
            icon={faCircleArrowRight}
            className={styles.arrow}
            onClick={() => handleMove("right")}
          />
        </div>
      )}
      <div className={styles.container}>
        {content}
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
