import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import { BsStars} from "react-icons/bs";
import { Link } from "react-router-dom";
import { pdata } from "./pdata";
import "./Popular.css";

const Popular = () => {
  return (
    <section className="popular">
      <div className="container popular__container">
        <div className="section__header">
          <span>
            <BsStars/>
          </span>
          <h2>COMBO OFFERS</h2>
        </div>
        <div className="popular__wrapper">
          {pdata.map(({ id, name,price, path, imge }) => {
            return (
              <div className="cards popular__program" key={id}>
                <h3>{name}</h3>
                <span><img src={imge} alt={name} /></span>
                <h4>{price}</h4>
                <Link to={path} className="btn sm">
                  ADD TO CART <AiOutlinePlus />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Popular