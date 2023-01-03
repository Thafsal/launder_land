import React from "react";
import "./Pricing.css";
import {price} from '../../data'

const Pricing = () => {
  return (
    <section className="pricing">
      <div className="container pricing__container">
        <div className="section__header">
          <h2>PRICING</h2>
          <span>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
              saepe doloremque, eligendi aliquid odio aspernatur eum repellat
              pariatur quasi obcaecati voluptas veniam magnam sunt expedita!
            </p>
          </span>
        </div>
        <div className="pricing__wrapper">
          {price.map(({id,name,amount,size,delivery,includes,fragrance,time }) => {
            return (
              <div className="price__body pricing__program" key={id}>
                <h3>{name}</h3>
                <h4>{amount}</h4>
                <span >
                  <p>{size}</p>
                  <p>{delivery}</p>
                  <p>{includes}</p>
                  <p>{fragrance}</p>
                  <p>{time}</p>
                </span>
                <button className="btn lg">ADD TO CART</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
