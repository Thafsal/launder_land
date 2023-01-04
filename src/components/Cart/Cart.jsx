import React from "react";
import "./Cart.css";

const Cart = () => {
  return (
    <section>
      <div className="cart-Container">
        <div className="Header">
          <h3 className="Heading">Shopping Cart</h3>
          <h5 className="Action">Remove all</h5>
        </div>
        <div className="Cart-Items">
          <div className="image-box">
            <img src="images/apple.png" style={{ height: "120px" }} />
          </div>
          <div className="cart-about">
            <h1 className="title">Apple Juice</h1>
            <h3 className="subtitle">250ml</h3>
            <img src="images/veg.png" style={{ height: "30px" }} />
          </div>
          <div className="cart-counter"></div>
          <div className="prices"></div>
          <div className="cart-counter">
            <div className="cart-btn">+</div>
            <div className="cart-count">2</div>
            <div className="cart-btn">-</div>
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
