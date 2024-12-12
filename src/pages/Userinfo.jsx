import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBagShopping, faXmark, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import "./userinfo.css";

export const Userinfo = () => {
  const navigate = useNavigate(); // Using useNavigate for React Router v6

  const handleLogout = () => {
    // Clear saved user data on logout
    localStorage.removeItem("userData");

    alert("You have successfully logged out!");

    // Redirect user to the login/signup page
    navigate("/loginSignUp");
  };

  return (
    <div className="usericon">
      {/* Link to Profile */}
      <p style={{ marginLeft: "4px" }}>
        <a href="/Profile" className="text-dark mx-2">
          <FontAwesomeIcon icon={faUser} /> My Acc
        </a>
      </p>

      {/* Link to Cart */}
      <p className="userinfo-item">
        <a href="/cart" className="text-dark mx-2">
          <FontAwesomeIcon icon={faBagShopping} /> My Order
        </a>
      </p>

      {/* Link to Cancelations */}
      <p className="userinfo-item" style={{ marginLeft: "8px" }}>
        <a href="/mens" className="text-dark mx-2">
          <FontAwesomeIcon icon={faXmark} /> My Cancelations
        </a>
      </p>

      {/* Link to Reviews */}
      <p className="userinfo-item" style={{ marginRight: "8px" }}>
        <a href="/fav" className="text-dark mx-2">
          <FontAwesomeIcon icon={faStar} /> My Reviews
        </a>
      </p>

      {/* Logout Button */}
      <p className="userinfo-item" onClick={handleLogout} style={{ cursor: "pointer" }}>
        <FontAwesomeIcon icon={faRightFromBracket} /> Log Out
      </p>
    </div>
  );
};

export default Userinfo;




