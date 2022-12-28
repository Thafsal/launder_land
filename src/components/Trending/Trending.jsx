import React from "react";
import { AiOutlineFire, AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { trnding } from "../../data";
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
        {
          trnding.map((id, name, offer, price, imge, path) => {
            return (
              <div key={id} className="">
                <div className="card"></div>
              </div>
            );
          })
        }
        </div>
      </div>
    </section>
  );
};

export default Trending;
