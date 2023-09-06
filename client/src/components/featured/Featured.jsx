import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const navigate = useNavigate();
  const { data, loading, error } = useFetch(
    "http://localhost:8800/api/hotels/countByCity?cities=BBSR,PURI,DELHI,AGRA"
  );

  // console.log(data);
  // console.log(error)

  return (
    <div className="featured">
      {loading ? (
        "Loading please Wait"
      ) : (
        <>
          <div className="box">
            <div
              className="featuredItem"
              onClick={() => {
                navigate(`/citylist?city=BBSR`);
              }}
            >
              <img
                src="https://s01.sgp1.cdn.digitaloceanspaces.com/article/154761-oimadlkngn-1613068459.jpg"
                alt=""
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h2>Bhubaneswar</h2> {/* <h2>{data[0]} properties</h2> */}
                <span>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgckDdN29pIUXaBfrnRaJ46CcUaEQBWnXapQ&usqp=CAU"
                    alt=""
                  />
                </span>
              </div>
            </div>

            <div
              className="featuredItem"
              onClick={() => {
                navigate(`/citylist?city=PURI`);
              }}
            >
              <img
                src="https://mycitylinks.in/wp-content/uploads/2020/12/PURI.jpg"
                alt=""
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h2>Puri</h2>
                {/* <h2>{data[1]} properties</h2> */}
                <span>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgckDdN29pIUXaBfrnRaJ46CcUaEQBWnXapQ&usqp=CAU"
                    alt=""
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="box">
            <div
              className="featuredItem"
              onClick={() => {
                navigate(`/citylist?city=AGRA`);
              }}
            >
              <img
                src="https://www.tourist-destinations.net/wp-content/uploads/2013/10/Agra-1.jpg"
                alt=""
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h2>Agra</h2>
                {/* <h2>{data[1]} properties</h2> */}
                <span>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgckDdN29pIUXaBfrnRaJ46CcUaEQBWnXapQ&usqp=CAU"
                    alt=""
                  />
                </span>
              </div>
            </div>{" "}
            <div
              className="featuredItem"
              onClick={() => {
                navigate(`/citylist?city=DELHI`);
              }}
            >
              <img
                src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0f/c5/e8/5c.jpg"
                alt=""
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h2>New Delhi</h2>
                {/* <h2>{data[1]} properties</h2> */}
                <span>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgckDdN29pIUXaBfrnRaJ46CcUaEQBWnXapQ&usqp=CAU"
                    alt=""
                  />
                </span>
              </div>
            </div>{" "}
            <div className="featuredItem">
              <img
                src="https://blog.lemontreehotels.com/wp-content/uploads/2018/05/Things-to-Do-in-Chennai-at-Night-1024x459.jpeg"
                alt=""
                className="featuredImg"
              />
              <div
                className="featuredTitles"
                onClick={() => {
                  navigate(`/citylist?city=CHENNAI`);
                }}
              >
                <h2>Chennai</h2>
                {/* <h2>{data[1]} properties</h2> */}
                <span>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgckDdN29pIUXaBfrnRaJ46CcUaEQBWnXapQ&usqp=CAU"
                    alt=""
                  />
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
