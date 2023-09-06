import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";

const Citylist = () => {
  const location = useLocation();
  let str = location.search;
  let i;
  let type = "";
  for (i = 6; i < str.length; i++) {
    type += str[i];
  }
  const { data, loading } = useFetch(
    `http://localhost:8800/api/hotels?city=${type}`
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

export default Citylist;
