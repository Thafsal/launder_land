import React from 'react';
import Home from "../Home/HomePage";
import AboutPage from "../About/AboutPage";
import Login from "../Login/Login";
import Contact from "../Contact/ContactPage";
import About from '../About/About';
import { Route, Routes } from "react-router-dom";
import Pricing from '../Pricing/Pricing';
import Cart from "../Cart/Cart"

const Routing = () => {
  return (
    <>
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/" element={<Home />} />
      <Route exact path="/aboutPage" element={<AboutPage />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/pricing" element={<Pricing />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/logout" element={<Login />} />
      <Route exact path="/cart" element={<Cart />} />
    </Routes>
  </>
  )
}

export default Routing