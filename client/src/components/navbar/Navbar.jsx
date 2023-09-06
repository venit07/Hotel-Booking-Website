import { useContext } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const clickHadnle = () => {
    navigate("/aboutus");
  };
  const bookedClickHadnle = () => {
    navigate("/booked");
  };
  const openHandle = () => {
    var element = document.getElementById("ul");
    if (element.classList.contains("hide")) {
      element.classList.remove("hide");
    } else {
      element.classList.add("hide");
    }
  };
  const newHotelClickHadnle = () => {
    navigate("/createhotel");
  };
  const { user } = useContext(AuthContext);
  function logout() {
    localStorage.clear();
    navigate("/login");
  }

  return (
    <>
      <div className="navbar">
        <div className="navContainer">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            <span className="logo">GoodLuck.com</span>
          </Link>
          {user ? (
            <>
              <div className="mainUser" onClick={openHandle}>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/149/149071.png"
                  alt=""
                />
              </div>
            </>
          ) : (
            <div className="navItems">
              <Link to={"/register"}>
                <button className="navButton">Register</button>
              </Link>
              <Link to={"/login"}>
                <button className="navButton">Sign in</button>
              </Link>
            </div>
          )}
        </div>
      </div>
      {user ? (
        <>
          <ul className="openModel hide" id="ul">
            <li>
              <img
                src="https://cdn-icons-png.flaticon.com/128/1077/1077114.png"
                alt=""
              />{" "}
              <div className="userLi">{user.username}</div>
            </li>
            <hr />
            <li>
              {" "}
              {user.isAdmin === true ? (
                <>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/10288/10288924.png"
                    alt=""
                  />
                  <div onClick={newHotelClickHadnle}>Add Hotel</div>
                  <span>&gt;</span>
                </>
              ) : (
                ""
              )}
            </li>
            <li>
              {" "}
              <img
                src="https://cdn-icons-png.flaticon.com/128/665/665049.png"
                alt=""
              />
              <div onClick={clickHadnle}>About Us</div>
              <span>&gt;</span>
            </li>
            <li>
              <img
                src="https://cdn-icons-png.flaticon.com/128/2356/2356937.png"
                alt=""
              />{" "}
              <div onClick={bookedClickHadnle}>Booked</div>
              <span>&gt;</span>
            </li>

            <li onClick={logout}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/2529/2529508.png"
                alt=""
              />
              Logout <span>&gt;</span>
            </li>
          </ul>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
