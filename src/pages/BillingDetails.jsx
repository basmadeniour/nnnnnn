import React, { useContext, useState } from 'react';
import "./BillingDetails.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { ShopContext } from "../context/Shopcontext";
import { Link } from "react-router-dom";
import all_product from "./../components/Assets/all_product";
import bkask from "../components/Assets/bKashBank.png";
import visa from "../components/Assets/Visa.png";
import master from "../components/Assets/MasterCard.png";
import external from "../components/Assets/externalbank.png";

export const BillingDetails = () => {
  const { cartItems } = useContext(ShopContext); // Retrieve cartItems from context
  const [orderPlaced, setOrderPlaced] = useState(false); // State for tracking order placement

  // Calculate the total cart amount
  const getTotalCartAmount = (cartItems, all_product) => {
    let totalAmount = 0;

    for (const itemId in cartItems) {
      const itemQuantity = cartItems[itemId]?.quantity || 0;
      if (itemQuantity > 0) {
        const itemInfo = all_product.find(
          (product) => product.id === Number(itemId)
        );
        if (itemInfo) {
          totalAmount += itemInfo.new_price * itemQuantity;
        }
      }
    }

    return totalAmount;
  };

  // Handle Place Order button click
  const handlePlaceOrder = (event) => {
    event.preventDefault(); // Prevent form submission
    setOrderPlaced(true); // Update state to show confirmation message
  };

  return (
    <div className="container">
      <div className="breadcrum">
        Home <FontAwesomeIcon icon={faChevronRight} /> My Acc{" "}
        <FontAwesomeIcon icon={faChevronRight} /> Product Details{" "}
        <FontAwesomeIcon icon={faChevronRight} /> View Cart{" "}
        <FontAwesomeIcon icon={faChevronRight} /> Check Out
      </div>
      <form className="row g-3">
        {/* Billing Details Section */}
        <div className="billingform col-12 col-md-3">
          <h5 className="h5billing">Billing Details</h5>

          <label htmlFor="firstName" className="form-label">First Name</label>
          <input type="text" className="form-control" id="firstName" />

          <label htmlFor="companyName" className="form-label">Company Name</label>
          <input type="text" className="form-control" id="companyName" />

          <label htmlFor="streetAddress" className="form-label">Street Address</label>
          <input type="text" className="form-control" id="streetAddress" />

          <label htmlFor="apartmentDetails" className="form-label">
            Apartment, floor, etc. (optional)
          </label>
          <input type="text" className="form-control" id="apartmentDetails" />

          <label htmlFor="townCity" className="form-label">Town/City</label>
          <input type="text" className="form-control" id="townCity" />

          <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
          <input type="text" className="form-control" id="phoneNumber" />

          <label htmlFor="emailAddress" className="form-label">Email Address</label>
          <input type="email" className="form-control" id="emailAddress" />

          <div className="form-check mt-2">
            <input
              className="form-check-input"
              type="checkbox"
              id="saveInfo"
            />
            <label className="form-check-label" htmlFor="saveInfo">
              Save this information for faster checkout next time
            </label>
          </div>
        </div>

        {/* Banking Details Section */}
        <div className="bankingdetails col-12 col-md-6">
          <div className="carttotaaal col-12 col-md-4">
            <h6 className="h6cart">Cart Total</h6>
            <p>
              Subtotal:{" "}
              <span className="kmjjpokpo">
                ${getTotalCartAmount(cartItems, all_product)}
              </span>
            </p>
            <hr />
            <p>
              Shipping: <span className="lastspan">free</span>
            </p>
            <hr />
            <p>
              Total:{" "}
              <span className="kmjjpokpohh">
                ${getTotalCartAmount(cartItems, all_product)}
              </span>
            </p>
          </div>

          <div className="copooon col-12 col-md-4" style={{ marginLeft: "-2%" }}>
            <input
              type="text"
              placeholder="Enter your Coupon"
              className="coponinput"
            />
            <button className="coponbtn">Apply Coupon</button>
          </div>

          <div className="llklkjjh">
            <p>
              <input type="radio" className="juuuju" />Bank
            </p>
            <div className="divbanking">
              <img src={bkask} alt="" />
              <img src={visa} alt="" />
              <img src={master} alt="" />
              <img src={external} alt="" />
              <br />
            </div>
            <div className="secinput">
              <p>
                <br /> <input type="radio" className="juuujukk" />Cash on delivery
              </p>
            </div>
          </div>

          <button
            className="ProcressToCheckouy"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>

          {orderPlaced && (
            <p className="order-message">Your order has been reserved!</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default BillingDetails;


