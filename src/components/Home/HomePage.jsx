import React from "react";
import Trending from "../Trending/Trending";
import Popular from "../Popular/Popular";
import AboutPage from "../About/AboutPage";
import MainHeader from "../MainHeader/MainHeader";

const HomePage = () => {
  return (
    <>
      <MainHeader />
      <Trending />
      <Popular />
      <AboutPage />
    </>
  );
};

export default HomePage;
