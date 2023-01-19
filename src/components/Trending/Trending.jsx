import React from "react";
import { AiOutlineFire, AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { tdata } from "./tdata";
import "./Trending.css";
// import { useContext } from "react";
// import { MyProvider } from "../../App";

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
          {tdata.map(({ id,name,price,offer,imge,path }) => {
            return (
              <div className="card programs__program" key={id}>
                <h3>{name}</h3>
                <h5>{price}</h5>
                <span><img src={imge} alt={id} /></span>
                <h4>{offer}</h4>
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
