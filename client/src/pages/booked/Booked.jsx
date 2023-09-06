import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./booked.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Booked = () => {
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const { data, loading } = useFetch(`http://localhost:8800/api/hotels`);

  const [userData, setUserData] = useState();

  const API = `http://localhost:8800/api/users/${user._id}`;
  useEffect(() => {
    async function getData() {
      const request = fetch(API);
      const response = await request;
      const parsed = await response.json();
      setUserData(parsed);
    }

    getData();
  }, []);

  console.log(userData);

  const newData = [];
  // console.log(user.booked);
  // console.log(data[0]);
  let i, j;
  for (i = 0; i < user.booked.length; i++) {
    for (j = 0; j < data.length; j++) {
      if (user.booked[i] == data[j]._id) {
        newData[i] = data[j];
      }
    }
  }

  // console.log(newData);

  const openHandle = () => {
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
      <Header type="list" />
      <div className="listResult">
        {loading ? (
          "loading"
        ) : newData.length ? (
          <>
            {newData.map((item) => (
              <>
                <SearchItem item={item} key={item._id} />
                <button
                  className="cBtn"
                  onClick={() => {
                    axios.put(
                      `http://localhost:8800/api/users/cancel/${user._id}`,
                      {
                        item,
                      }
                    );
                    openHandle();
                  }}
                >
                  Cancel
                </button>
              </>
            ))}
          </>
        ) : (
          <>
            <div className="noData">No Data Found</div>
          </>
        )}
      </div>
      <div id="popup" className="popup hide">
        <img
          src="https://cdn-icons-png.flaticon.com/128/4436/4436481.png"
          alt=""
        />
        <h2>Cancel Reservation ?</h2>
        <p>You are successfully cancel this reservation ?</p>
        <button type="button" onClick={conform}>
          OK
        </button>
      </div>
    </div>
  );
};

export default Booked;
