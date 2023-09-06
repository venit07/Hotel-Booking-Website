import React from "react";
import "./hotelAds.css";
import { useNavigate } from "react-router-dom";

const HotelAds = () => {
  const clickHandler = () => {
    window.location.reload(true);
  };
  return (
    <div className="mainAds">
      <div className="smallImg"></div>
      <div className="middleDiv">
        <div className="h21 h2">ALONE, find</div>
        <div className="sliderDiv">
          <ul className="sliderUl">
            <li>Home</li>
            <li>Apartments</li>
            <li>hotels</li>
            <li>villas</li>
            <li>Resorts</li>
          </ul>
        </div>
        <div className="h22 h2">for your next trip</div>
        <button onClick={clickHandler}>Discover homes</button>
      </div>
      <div className="largeImg">
        <img
          src="https://q-xx.bstatic.com/psb/capla/static/media/bh_aw_cpg_main_image.b4347622.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default HotelAds;
