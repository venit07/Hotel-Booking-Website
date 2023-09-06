import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Property from "./pages/propertyTypeList/Property";
import AboutUs from "./pages/aboutUs/AboutUs";
import Booked from "./pages/booked/Booked";
import CreateHotel from "./pages/createHotel/CreateHotel";
import CityList from "./pages/cityList/Citylist";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Property" element={<Property />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/booked" element={<Booked />} />
        <Route path="/createhotel" element={<CreateHotel />} />
        <Route path="/citylist" element={<CityList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
