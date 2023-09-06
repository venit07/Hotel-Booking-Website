import { Link, useNavigate } from "react-router-dom";
import "./createhotel.css";
import { useState } from "react";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";

const CreateHotel = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [distance, setDistance] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [sdesc, setSdesc] = useState("");
  const [rating, setRating] = useState("");
  const [availability, setAvailability] = useState("");
  const [cheapestPrice, setCheapestPrice] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [image5, setImage5] = useState("");
  const [image6, setImage6] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    const photos = [image1, image2, image3, image4, image5, image6];
    try {
      await axios.post("http://localhost:8800/api/hotels", {
        name,
        type,
        city,
        address,
        distance,
        photos,
        title,
        desc,
        sdesc,
        rating,
        availability,
        cheapestPrice,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="lc">
        <div className="chcenter">
          <h1>Add New Hotel</h1>
          <form>
            <div className="midDiv">
              <div className="col1">
                <div className="txt_field">
                  <input
                    type="text"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    id="hotelname"
                    required
                  />
                  <span></span>
                  <label htmlFor="hotelname">Hotel Name</label>
                </div>
                <div className="txt_field">
                  <input
                    type="text"
                    onChange={(e) => {
                      setType(e.target.value);
                    }}
                    id="type"
                    required
                  />
                  <span></span>
                  <label htmlFor="type">Type</label>
                </div>
                <div className="txt_field">
                  <input
                    type="text"
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                    id="city"
                    required
                  />
                  <span></span>
                  <label htmlFor="city">City</label>
                </div>
                <div className="txt_field">
                  <input
                    type="text"
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    id="address"
                    required
                  />
                  <span></span>
                  <label htmlFor="address">Address</label>
                </div>
                <div className="txt_field">
                  <input
                    type="text"
                    onChange={(e) => {
                      setDistance(e.target.value);
                    }}
                    id="distance"
                    required
                  />
                  <span></span>
                  <label htmlFor="distance">Distance</label>
                </div>
                <div className="txt_field">
                  <input
                    type="text"
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                    id="title"
                    required
                  />
                  <span></span>
                  <label htmlFor="title">Title</label>
                </div>
              </div>
              <div className="col2">
                <div className="txt_field">
                  <input
                    type="text"
                    onChange={(e) => {
                      setDesc(e.target.value);
                    }}
                    id="description"
                    required
                  />
                  <span></span>
                  <label htmlFor="description">Description</label>
                </div>
                <div className="txt_field">
                  <input
                    type="text"
                    onChange={(e) => {
                      setSdesc(e.target.value);
                    }}
                    id="sdescription"
                    required
                  />
                  <span></span>
                  <label htmlFor="sdescription">Short Description</label>
                </div>
                <div className="txt_field">
                  <input
                    type="text"
                    onChange={(e) => {
                      setRating(e.target.value);
                    }}
                    id="rating"
                    required
                  />
                  <span></span>
                  <label htmlFor="rating">Rating</label>
                </div>
                <div className="txt_field">
                  <input
                    type="text"
                    onChange={(e) => {
                      setAvailability(e.target.value);
                    }}
                    id="room"
                    required
                  />
                  <span></span>
                  <label htmlFor="room">Room Aviable</label>
                </div>
                <div className="txt_field">
                  <input
                    type="text"
                    onChange={(e) => {
                      setCheapestPrice(e.target.value);
                    }}
                    id="price"
                    required
                  />
                  <span></span>
                  <label htmlFor="price">Price</label>
                </div>
              </div>
              <div className="col3">
                <div className="txt_field">
                  <input
                    type="text"
                    onChange={(e) => {
                      setImage1(e.target.value);
                    }}
                    id="pic1"
                    required
                  />
                  <span></span>
                  <label htmlFor="pic1">Image Link 1</label>
                </div>
                <div className="txt_field">
                  <input
                    type="text"
                    onChange={(e) => {
                      setImage2(e.target.value);
                    }}
                    id="pic2"
                    required
                  />
                  <span></span>
                  <label htmlFor="pic2">Image Link 1</label>
                </div>
                <div className="txt_field">
                  <input
                    type="text"
                    onChange={(e) => {
                      setImage3(e.target.value);
                    }}
                    id="pic3"
                    required
                  />
                  <span></span>
                  <label htmlFor="pic3">Image Link 3</label>
                </div>
                <div className="txt_field">
                  <input
                    type="text"
                    onChange={(e) => {
                      setImage4(e.target.value);
                    }}
                    id="pic4"
                    required
                  />
                  <span></span>
                  <label htmlFor="pic4">Image Link 4</label>
                </div>
                <div className="txt_field">
                  <input
                    type="text"
                    onChange={(e) => {
                      setImage5(e.target.value);
                    }}
                    id="pic5"
                    required
                  />
                  <span></span>
                  <label htmlFor="pic5">Image Link 5</label>
                </div>
                <div className="txt_field">
                  <input
                    type="text"
                    onChange={(e) => {
                      setImage6(e.target.value);
                    }}
                    id="pic6"
                    required
                  />
                  <span></span>
                  <label htmlFor="pic6">Image Link 6</label>
                </div>
              </div>
            </div>

            <button onClick={handleClick} className="lButton">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateHotel;
