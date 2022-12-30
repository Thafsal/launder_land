import React from "react";
import { MdOutlineLibraryBooks } from "react-icons/md";
import abt from '../../images/s.jpg'



const About = () => {
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
              Est unde sint ad nemo porro. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Incidunt aut expedita, in nemo
              aliquid earum voluptatem veritatis fugiat voluptate cum error enim
              eveniet exercitationem repellendus quisquam ipsam minima neque!
              Aliquam?
            </h5>
          </div>
          <div className="box">
            <span>
              <img src={abt} alt="logo" />
            </span>
          </div>
        </div>
        <div className="about__wrapper">
          <div>
            <h3>OUR HISTORY</h3>
            <h5 className="about__content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores quas fuga pariatur nihil neque ipsum eum quia
              quisquam?Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Est unde sint ad nemo porro. Lorem ipsum dolor sit amet
              consectetur adipisicing elit.
            </h5>
          </div>
          <div className="box">
            <span>
              <img src={abt} alt="logo" />
            </span>
          </div>
        </div>
        <div className="about__wrapper">
          <div>
            <h3>OUR MISSION</h3>
            <h5 className="about__content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores quas fuga pariatur nihil neque ipsum eum quia
              quisquam?
            </h5>
          </div>
          <div className="box">
            <span>
              <img src={abt} alt="logo" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
