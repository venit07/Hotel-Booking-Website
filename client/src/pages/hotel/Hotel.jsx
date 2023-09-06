import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../../components/reserve/Reserve";
import axios from "axios";

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { data, loading, error } = useFetch(
    `http://localhost:8800/api/hotels/find/${id}`
  );
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  let total = +data.cheapestPrice;

  let days;
  const { dates, options } = useContext(SearchContext);

  if (dates.length) {
    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    function dayDifference(date1, date2) {
      const timeDiff = Math.abs(date2.getTime() - date1.getTime());
      const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
      return diffDays;
    }

    days = dayDifference(dates[0].endDate, dates[0].startDate);
  } else {
    days = "1";
    options.room = 1;
  }

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  const handleClick = () => {
    if (user) {
      axios.put(`http://localhost:8800/api/users/booked/${user._id}`, {
        id,
      });
    } else {
      navigate("/login");
    }
    var element = document.getElementById("popup");
    if (element.classList.contains("hide")) {
      element.classList.remove("hide");
    } else {
      element.classList.add("hide");
    }
  };
  const conform = () => {
    navigate("/");
  };
  return (
    <div>
      <Navbar />
      {/* <Header type="list" /> */}
      {loading ? (
        "loading"
      ) : (
        <div className="hotelContainer">
          {open && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleMove("l")}
              />
              <div className="sliderWrapper">
                <img
                  src={data.photos[slideNumber]}
                  alt=""
                  className="sliderImg"
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleMove("r")}
              />
            </div>
          )}
          <div className="hotelWrapper">
            {data.availability > 0 ? (
              <Link to={`https://buy.stripe.com/test_dR616x4xT1jG7mMfYY`}>
                <button className="bookNow">Reserve or Book Now!</button>
              </Link>
            ) : (
              " "
            )}
            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className="hotelDistance">
              Excellent location – {data.distance} from center
            </span>
            <span className="hotelPriceHighlight">
              Book a stay over ₹{total} at this property and get a free airport
              taxi
            </span>
            <div className="hotelImages">
              {data.photos?.map((photo, i) => (
                <div className="hotelImgWrapper" key={i}>
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo}
                    alt=""
                    className="hotelImg"
                  />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">{data.title}</h1>
                <p className="hotelDesc">{data.desc}</p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a {days}-night stay!</h1>
                <span>
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                </span>
                <h2>
                  <b>₹{options.room ? days * total * options.room : total}</b> (
                  {days} nights)
                </h2>
                {data.availability > 0 ? (
                  <div className="book">
                    <button onClick={handleClick}>Reserve or Book Now!</button>
                  </div>
                ) : (
                  <p>Sorry,No Room Aviable!</p>
                )}
              </div>
            </div>
            <div id="popup" className="popup hide">
              <img
                src="https://cdn-icons-png.flaticon.com/128/4436/4436481.png"
                alt=""
              />
              <h2>Booked Successfully</h2>
              <p>Thanks for your conformation.</p>
              <button type="button" onClick={conform}>
                OK
              </button>
            </div>
          </div>
          <div className="facilities">
            <p className="faciHeading">Most popular facilities</p>
            <div className="facilitiesRow">
              <div className="firstRow">
                <div className="part">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/3210/3210158.png"
                    alt=""
                  />
                  <div className="facilitiesText">Free parking</div>
                </div>
                <div className="part">
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-512/free-restaurant-1780482-1517572.png?f=avif&w=256"
                    alt=""
                  />
                  <div className="facilitiesText">Restaurant</div>
                </div>
                <div className="part">
                  <img
                    src="https://cdn.iconscout.com/icon/premium/png-512-thumb/family-room-7778231-6329119.png?f=avif&w=256"
                    alt=""
                  />
                  <div className="facilitiesText">Family Rooms</div>
                </div>
                <div className="part">
                  <img
                    src="https://cdn.iconscout.com/icon/premium/png-512-thumb/room-service-27-1043216.png?f=avif&w=256"
                    alt=""
                  />
                  <div className="facilitiesText">room service</div>
                </div>
                <div className="part">
                  <img
                    src="https://cdn.iconscout.com/icon/premium/png-512-thumb/non-smoking-rooms-7778238-6329126.png?f=avif&w=256"
                    alt=""
                  />
                  <div className="facilitiesText">Non-smoking rooms</div>
                </div>
              </div>
              <div className="secondRow">
                <div className="part">
                  <img
                    src="https://cdn.iconscout.com/icon/premium/png-512-thumb/barbell-5646526-4716329.png?f=avif&w=256"
                    alt=""
                  />
                  <div className="facilitiesText">Fitness centre</div>
                </div>
                <div className="part">
                  <img
                    src="https://cdn.iconscout.com/icon/premium/png-512-thumb/tea-114-157201.png?f=avif&w=256"
                    alt=""
                  />
                  <div className="facilitiesText">
                    Tea/coffee maker in all rooms
                  </div>
                </div>
                <div className="part">
                  <img
                    src="https://cdn.iconscout.com/icon/premium/png-512-thumb/breakfast-1900856-1609010.png?f=avif&w=256"
                    alt=""
                  />
                  <div className="facilitiesText">Breakfast</div>
                </div>
              </div>
            </div>
          </div>
          <p className="facitiliesDetailsOhead">Facilities of {data.name}</p>
          <div className="facitiliesDetails">
            <div className="fdCol fdCol1">
              <div className="fdCol1_row1">
                <div className="fdCol_head">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/3210/3210158.png"
                    alt=""
                  />
                  <p>Parking</p>
                </div>
                <div className="fdCol_text">
                  Free private parking is possible on site (reservation is not
                  needed).
                </div>
              </div>
              <div className="fdCol1_row">
                <div className="fdCol_head">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/3287/3287922.png"
                    alt=""
                  />
                  <p>Internet</p>
                </div>
                <div className="fdCol_text">
                  WiFi is available in all areas and is free of charge.
                </div>
              </div>
              <div className="fdCol1_row">
                <div className="fdCol_head">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/3305/3305966.png"
                    alt=""
                  />
                  <p>Kitchen</p>
                </div>
                <div className="fdCol_text">
                  <p>
                    <span className="MLICON"> ✓ </span> Dining Table
                  </p>
                  <p>
                    <span className="MLICON"> ✓ </span> Coffee machine
                  </p>
                  <p>
                    <span className="MLICON"> ✓ </span> Electric kettle
                  </p>
                </div>
              </div>
              <div className="fdCol1_row">
                <div className="fdCol_head">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/2284/2284001.png"
                    alt=""
                  />
                  <p>Bedroom</p>
                </div>
                <div className="fdCol_text">
                  <p>
                    <span className="MLICON"> ✓ </span>Linen
                  </p>
                </div>
              </div>
              <div className="fdCol1_row">
                <div className="fdCol_head">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/259/259973.png"
                    alt=""
                  />
                  <p>Bathroom</p>
                </div>
                <div className="fdCol_text">
                  <p>
                    <span className="MLICON"> ✓ </span>Toilet paper
                  </p>
                  <p>
                    <span className="MLICON"> ✓ </span>Towels
                  </p>
                  <p>
                    <span className="MLICON"> ✓ </span>Bath or shower
                  </p>
                  <p>
                    <span className="MLICON"> ✓ </span>Private bathroom
                  </p>
                  <p>
                    <span className="MLICON"> ✓ </span>Toilet
                  </p>
                  <p>
                    <span className="MLICON"> ✓ </span>Shower
                  </p>
                </div>
              </div>
              <div className="fdCol1_row">
                <div className="fdCol_head">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/4433/4433747.png"
                    alt=""
                  />
                  <p>Living Area</p>
                </div>
                <div className="fdCol_text">
                  <p>
                    <span className="MLICON"> ✓ </span>Seating Area
                  </p>
                </div>
              </div>
              <div className="fdCol1_row">
                <div className="fdCol_head">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/3986/3986625.png"
                    alt=""
                  />
                  <p>Room Amenitiesa</p>
                </div>
                <div className="fdCol_text">
                  <p>
                    <span className="MLICON"> ✓ </span>Socket near the bed
                  </p>
                  <p>
                    <span className="MLICON"> ✓ </span>Soundproofing
                  </p>
                  <p>
                    <span className="MLICON"> ✓ </span>Private entrance
                  </p>
                  <p>
                    <span className="MLICON"> ✓ </span>Fan
                  </p>
                </div>
              </div>
            </div>
            <div className="fdCol">
              <div className="fdCol1_row1">
                <div className="fdCol_head">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/2611/2611286.png"
                    alt=""
                  />
                  <p>Accessibility</p>
                </div>
                <div className="fdCol_text">
                  <p>
                    <span className="MLICON"> ✓ </span>Upper floors accessible
                    by stairs only
                  </p>
                  <p>
                    <span className="MLICON"> ✓ </span>Entire unit located on
                    ground floor
                  </p>
                </div>
              </div>
              <div className="fdCol1_row">
                <div className="fdCol_head">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/690/690254.png"
                    alt=""
                  />
                  <p>Outdoors</p>
                </div>
                <div className="fdCol_text">
                  <p>
                    <span className="MLICON"> ✓ </span>Outdoor fireplace
                  </p>
                  <p>
                    <span className="MLICON"> ✓ </span>Outdoor furniture
                  </p>
                  <p>
                    <span className="MLICON"> ✓ </span>Outdoor dining area
                  </p>
                  <p>
                    <span className="MLICON"> ✓ </span>Sun terrace
                  </p>
                  <p>
                    <span className="MLICON"> ✓ </span>Barbecue
                  </p>
                  <p>
                    <span className="MLICON"> ✓ </span>BBQ facilities
                  </p>
                  <p>
                    <span className="MLICON"> ✓ </span>Terrace
                  </p>
                  <p>
                    <span className="MLICON"> ✓ </span>Garden
                  </p>
                </div>
                <div className="fdCol1_row">
                  <div className="fdCol_head">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/1721/1721094.png"
                      alt=""
                    />
                    <p>Wellness</p>
                  </div>
                  <div className="fdCol_text">
                    <p>
                      <span className="MLICON"> ✓ </span>Personal trainer
                    </p>
                    <p>
                      <span className="MLICON"> ✓ </span>Fitness classes
                    </p>
                  </div>
                </div>
                <div className="fdCol1_row">
                  <div className="fdCol_head">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/113/113082.png"
                      alt=""
                    />
                    <p>Food & Drink</p>
                  </div>
                  <div className="fdCol_text">
                    <p>
                      <span className="MLICON"> ✓ </span>Wine/champagne
                    </p>
                    <p>
                      <span className="MLICON"> ✓ </span>Grocery deliveries
                    </p>
                    <p>
                      <span className="MLICON"> ✓ </span>Packed lunches
                    </p>
                    <p>
                      <span className="MLICON"> ✓ </span>Minibar
                    </p>
                  </div>
                </div>
                <div className="fdCol1_row">
                  <div className="fdCol_head">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/2619/2619953.png"
                      alt=""
                    />
                    <p>Activities</p>
                  </div>
                  <div className="fdCol_text">
                    <p>
                      <span className="MLICON"> ✓ </span>Walking tours
                    </p>
                  </div>
                </div>
                <div className="fdCol1_row">
                  <div className="fdCol_head">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/817/817219.png"
                      alt=""
                    />
                    <p>Outdoor & View</p>
                  </div>
                  <div className="fdCol_text">
                    <p>
                      <span className="MLICON"> ✓ </span>Garden view
                    </p>
                    <p>
                      <span className="MLICON"> ✓ </span>View
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="fdCol">
              <div className="fdCol1_row1">
                <div className="fdCol_head">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/632/632519.png"
                    alt=""
                  />
                  <p>Transport</p>
                </div>
                <div className="fdCol_text">
                  <p>
                    <span className="MLICON"> ✓ </span>Car Rental
                  </p>
                </div>
              </div>
              <div className="fdCol1_row">
                <div className="fdCol_head">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/7314/7314261.png"
                    alt=""
                  />
                  <p>Reception services</p>
                </div>
                <div className="fdCol_text">
                  <p>
                    <span className="MLICON"> ✓ </span>Invoice provided
                  </p>
                  <p>
                    <span className="MLICON"> ✓ </span>Private
                    check-in/check-out
                  </p>
                  <p>
                    <span className="MLICON"> ✓ </span>Express
                    check-in/check-out
                  </p>
                  <p>
                    <span className="MLICON"> ✓ </span>24-hour front desk
                  </p>
                </div>
              </div>
              <div className="fdCol1_row">
                <div className="fdCol_head">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/2769/2769467.png"
                    alt=""
                  />
                  <p>Entertainment and family services</p>
                </div>
                <div className="fdCol_text">
                  <p>
                    <span className="MLICON"> ✓ </span>Board games/puzzles
                  </p>
                </div>
              </div>
              <div className="fdCol1_row">
                <div className="fdCol_head">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/847/847476.png"
                    alt=""
                  />
                  <p>Miscellaneous</p>
                </div>
                <div className="fdCol_text">
                  <p>
                    <span className="MLICON"> ✓ </span>Adult only
                  </p>
                  <p>
                    <span className="MLICON"> ✓ </span>Designated smoking area
                  </p>
                  <p>
                    <span className="MLICON"> ✓ </span>Air conditioning
                  </p>
                  <p>
                    <span className="MLICON"> ✓ </span>Non-smoking throughout
                  </p>
                  <p>
                    <span className="MLICON"> ✓ </span>Heating
                  </p>
                  <p>
                    <span className="MLICON"> ✓ </span>Non-smoking rooms
                  </p>
                </div>
              </div>
              <div className="fdCol1_row">
                <div className="fdCol_head">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/388/388531.png"
                    alt=""
                  />
                  <p>Safety & security</p>
                </div>
                <div className="fdCol_text">
                  <p>
                    <span className="MLICON"> ✓ </span>Fire extinguishers
                  </p>
                  <p>
                    <span className="MLICON"> ✓ </span>Smoke alarms
                  </p>
                  <p>
                    <span className="MLICON"> ✓ </span>Security alarm
                  </p>
                  <p>
                    <span className="MLICON"> ✓ </span>Key access
                  </p>
                  <p>
                    <span className="MLICON"> ✓ </span>Carbon monoxide detector
                  </p>
                </div>
              </div>
              <div className="fdCol1_row">
                <div className="fdCol_head">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/1371/1371778.png"
                    alt=""
                  />
                  <p>Languages spoken</p>
                </div>
                <div className="fdCol_text">
                  <p>
                    <span className="MLICON"> ✓ </span>English
                  </p>
                  <p>
                    <span className="MLICON"> ✓ </span>French
                  </p>
                  <p>
                    <span className="MLICON"> ✓ </span>Odia
                  </p>
                  <p>
                    <span className="MLICON"> ✓ </span>Hindi
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rules">
            <div className="rulesHead">House Rules</div>
            <p className="rulesText">
              {data.name} takes special requests - add in the next step!
            </p>
            <div className="mainTable">
              <div className="tr">
                <div className="tc1">Check-in</div>
                <div className="tc2">From 12:00 to 23:30</div>
              </div>
              <span className="rulesSpan"></span>
              <div className="tr">
                <div className="tc1">Check-out</div>
                <div className="tc2">From 07:00 to 11:30</div>
              </div>
              <span className="rulesSpan"></span>
              <div className="tr">
                <div className="tc1">
                  Cancellation/<br></br> prepayment
                </div>
                <div className="tr3_tc2 tc2">
                  Cancellation and prepayment policies vary according to
                  accommodation type. Please enter the dates of your stay and
                  check the conditions of your required room.
                </div>
              </div>
              <span className="rulesSpan"></span>
              <div className="tr tr4">
                <div className="tc1">Children and beds</div>
                <div className="tc2">
                  <p>
                    <strong>Child policies</strong>
                  </p>
                  <p>Children are not allowed.</p>
                  <p>
                    <strong>Cot and extra bed policies</strong>
                  </p>
                  <p>There is no capacity for cots at this property.</p>
                  <p>There is no capacity for extra beds at this property. </p>
                </div>
              </div>
              <span className="rulesSpan"></span>
              <div className="tr">
                <div className="tc1">Age restriction</div>
                <div className="tc2">The minimum age for check-in is 18</div>
              </div>
              <span className="rulesSpan"></span>
              <div className="tr">
                <div className="tc1">Payments by GoodLuck.com</div>
                <div className="tr6_tc2 tc2">
                  Booking.com takes your payment on behalf of the property for
                  this stay, but make sure you have cash for any extras once you
                  get there.
                </div>
              </div>
              <span className="rulesSpan"></span>
              <div className="tr">
                <div className="tc1">Smoking</div>
                <div className="tc2">Smoking is not allowed</div>
              </div>
              <span className="rulesSpan"></span>
              <div className="tr">
                <div className="tc1">Parties</div>
                <div className="tc2">Parties/events are not allowed</div>
              </div>
              <span className="rulesSpan"></span>
              <div className="tr">
                <div className="tc1">Quiet hours</div>
                <div className="tc2">
                  Guests must be quiet between 23:00 and 08:00.
                </div>
              </div>
              <span className="rulesSpan"></span>
              <div className="tr">
                <div className="tc1">Pets</div>
                <div className="tc2">Pets are not allowed</div>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Hotel;
