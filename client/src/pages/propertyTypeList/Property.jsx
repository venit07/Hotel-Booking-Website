import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import SearchItem from "../../components/searchItem/SearchItem";
import "./property.css";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";

const Property = () => {
  const location = useLocation();
  let str = location.search;
  let i;
  let type = "";
  for (i = 1; i < str.length; i++) {
    type += str[i];
  }
  const { data, loading } = useFetch(
    `http://localhost:8800/api/hotels?type=${type}`
  );
  return (
    <div>
      <Navbar />
      {/* <Header type="list" /> */}
      <div className="listResult">
        {loading ? (
          "loading"
        ) : (
          <>
            {data.map((item) => (
              <SearchItem item={item} key={item._id} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Property;
