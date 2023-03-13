import React from "react";
import "./Cart.css";
import regular from "../../images/regular.jpg";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../redux/actions";



const Cart = () => {
      
const count = useSelector((state) => state.count);
const dispatch = useDispatch();

const handleIncrement =() =>{
  dispatch(increment())
};

const handleDecrement =() =>{
  dispatch(decrement())
};
  return (
    <section>
      <div className="cart-Container">
        <div className="Header">
          <h3 className="Heading">Shopping Cart</h3>
          <h5 className="Action">Remove all</h5>
        </div>
        <div className="Cart-Items">
          <div className="image-box">
            <img src={regular} alt="logo" style={{ height: "120px" }} />
          </div>
          <div className="cart-about">
            <h1 className="title">Regular Bag</h1>
            <h3 className="subtitle">6 KG</h3>
          </div>
          <div className="cart-counter"></div>
          <div className="prices"></div>
          <div className="cart-counter">
          <div className="cart-btn" onClick={handleDecrement}>
              -
            </div>
            <div className="cart-count">{count}</div>
            <div className="cart-btn" onClick={handleIncrement}>
              +
            </div>
          </div>
          <div className="cart-prices">
            <div className="cart-amount">$2.99</div>
            <div className="cart-save">
              <u>Save for later</u>
            </div>
            <div className="cart-remove">
              <u>Remove</u>
            </div>
          </div>
        </div>
        <hr />
        <div className="cart-checkout">
          <div className="cart-total">
            <div>
              <div className="cart-Subtotal">Sub-Total</div>
              <div className="cart-items">2 items</div>
            </div>
            <div className="cart-total-amount">$6.18</div>
          </div>
          <button className="cart-button">Checkout</button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
