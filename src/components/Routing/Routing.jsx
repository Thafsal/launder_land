import React from 'react';
import Home from "../Home/HomePage";
import AboutPage from "../About/AboutPage";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";
import Contact from "../Contact/ContactPage";
import About from '../About/About';
import { Route, Routes } from "react-router-dom";
import Pricing from '../Bookings/Pricing';
import Cart from "../Cart/Cart"

const Routing = () => {
  return (
    <>
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/" element={<Home />} />
      <Route exact path="/aboutPage" element={<AboutPage />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/booking" element={<Pricing />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/logout" element={<Logout />} />
      <Route exact path="/logout" element={<Cart />} />
    </Routes>
  </>
  )
}

export default Routing