import React from "react";
import "./offer.css";
import { Link, useNavigate } from "react-router-dom";

const Offer = () => {
  const navigate = useNavigate;

  // const clickHandler = () => {
  //   navigate(`/Property?hotel`);
  // };
  return (
    <div className="offerContainer">
      <h2>Offers</h2>
      <p className="uText">Promotions, deals and special offers for you</p>
      <div className="offerList">
        <div className="firstContainer main">
          <div className="text">
            <div className="itext">Take your longest holiday yet</div>
            <p>
              Browse properties offering long-term stays, many at reduced
              monthly rates.
            </p>
            <Link to={"/Property?hotel"}>
              <button>Find a stay</button>
            </Link>
          </div>
          <div className="img1">
            <img
              src="https://q-xx.bstatic.com/xdata/images/xphoto/500x500/220031205.jpeg?k=bf9841e8ba89dfdf92e02d45e45dc89fcca2d981b7c74ad57d3ecf6ba64ba1c2&o="
              alt=""
            />
          </div>
        </div>
        <div className="secondContainer main">
          <div className="img2">
            <img
              src="https://q-xx.bstatic.com/xdata/images/xphoto/714x300/204490944.jpeg?k=f1dbbec42645c0ed1dc25f1e0878ab449b461baf936dcd971ad8c63bf13d0dc6&o="
              alt=""
            />
            <div className="text2">
              <h4>The great getaway, your way</h4>
              <p>
                Save at least 15% on stays worldwide, from relaxing retreats to
                off-grid adventures
              </p>
              <Link to={"/Property?hotel"}>
                <button>Find Getaway Deals</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
