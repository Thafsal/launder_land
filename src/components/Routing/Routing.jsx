import React from 'react';
import Home from "../Home/HomePage";
import About from "../About/AboutPage";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";
import Bookings from "../Bookings/BookingPage";
import Contact from "../Contact/ContactPage";
import { Route, Routes } from "react-router-dom";

const Routing = () => {
  return (
    <>
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/booking" element={<Bookings />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/logout" element={<Logout />} />
    </Routes>
  </>
  )
}

export default Routing