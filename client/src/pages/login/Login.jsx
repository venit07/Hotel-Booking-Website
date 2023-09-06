import { useContext, useState } from "react";
import "./login.css";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "http://localhost:8800/api/auth/login",
        credentials
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  // console.log(user);

  return (
    <>
      <div className="lc">
        <div className="center">
          <h1>Login</h1>
          <form>
            <div className="txt_field">
              <input
                type="text"
                id="username"
                onChange={handleChange}
                required
              />
              <span></span>
              <label htmlFor="username">Username</label>
            </div>
            <div className="txt_field">
              <input
                type="password"
                id="password"
                onChange={handleChange}
                required
              />
              <span></span>
              <label htmlFor="password">Password</label>
            </div>
            <button
              disabled={loading}
              onClick={handleClick}
              className="lButton"
            >
              Login
            </button>
            {error && <span>{error.message}</span>}

            <div className="signup_link">
              Not a member?
              <Link to={"/register"}>
                <span>Signup</span>
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* 
      <div className="login">
        <div className="lContainer">
          <input
            type="text"
            placeholder="username"
            id="username"
            onChange={handleChange}
            className="lInput"
          />
          <input
            type="password"
            placeholder="password"
            id="password"
            onChange={handleChange}
            className="lInput"
          />
          <button disabled={loading} onClick={handleClick} className="lButton">
            Login
          </button>
          {error && <span>{error.message}</span>}
        </div>
      </div> */}
    </>
  );
};

export default Login;
