import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const FeaturedProperties = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const { data, loading, error } = useFetch(
    "http://localhost:8800/api/hotels?featured=true"
  );
  // console.log(data);

  return (
    <>
      {/* <Carousel responsive={responsive}> */}
      <div className="fp">
        {loading ? (
          "Loading"
        ) : (
          <>
            {data.map((item, i) => (
              <Link
                to={`/hotels/${item._id}`}
                key={item._id}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <div className="fpItem">
                  <img src={item.photos[0]} alt="" className="fpImg" />
                  <span className="fpName">{item.name}</span>
                  <span className="fpCity">{item.city}</span>
                  <span className="fpPrice">
                    Starting from ${item.cheapestPrice}
                  </span>
                  {item.rating && (
                    <div className="fpRating">
                      <button>{item.rating}</button>
                      <span>Excellent</span>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </>
        )}
      </div>
      {/* </Carousel> */}
    </>
  );
};

export default FeaturedProperties;
