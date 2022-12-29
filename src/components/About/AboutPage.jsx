import React from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { Link } from "react-router-dom";
import "./AboutPage.css";
import abt from '../../images/s.jpg'

const AboutPage = () => {
  return (
    <section className="about">
      <div className="container about__container">
        <div className="about__header">
          <h2>
            <MdOutlineLibraryBooks /> ABOUT US
          </h2>
        </div>
        <div className="about__wrapper">
          <div>
            <h3>WHO ARE WE</h3>
            <h5 className="about__content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores quas fuga pariatur nihil neque ipsum eum quia
              quisquam?Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Est unde sint ad nemo porro.
            </h5>
            <Link to='/about' className="about__btn">Learn More...<AiOutlineCaretRight/></Link>
          </div>
          <div className="card">
            <img src={abt} alt="logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
