import React from "react";
import { AiOutlineFire, AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { tdata } from "./tdata";
import "./Trending.css";

const Trending = () => {
  return (
    <section className="programs">
      <div className="container programs__container">
        <div className="section__header">
          <span>
            <AiOutlineFire />
          </span>
          <h2>TRENDING PRODUCTS</h2>
        </div>
        <div className="programs__wrapper">
          {tdata.map(({ id, name, offer, price, path, imge }) => {
            return (
              <div className="card programs__program" key={id}>
                <h3>{name}</h3>
                <h5>{offer}</h5>
                <span><img src={imge} alt={name} /></span>
                <h4>{price}</h4>
                <Link to={path} className="btn sm">
                  Learn More <AiOutlinePlus />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Trending;
