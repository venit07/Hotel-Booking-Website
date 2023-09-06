import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let err;
  const handleClick = (e) => {
    try {
      axios.post("http://localhost:8800/api/auth/register", {
        username,
        email,
        password,
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="lc">
      <div className="center">
        <h1>Signup</h1>
        <form>
          <div className="txt_field">
            <input
              type="text"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              id="username"
              required
            />
            <span></span>
            <label htmlFor="username">Username</label>
          </div>
          <div className="txt_field">
            <input
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              id="email"
              required
            />
            <span></span>
            <label htmlFor="email">Email Id</label>
          </div>
          <div className="txt_field">
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              id="password"
              required
            />
            <span></span>
            <label htmlFor="password">Password</label>
          </div>
          <button onClick={handleClick} className="lButton">
            Signup
          </button>
          {err && <span>{err}</span>}

          <div className="signup_link">
            Already a member?
            <Link to={"/login"}>
              <span>Login</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
