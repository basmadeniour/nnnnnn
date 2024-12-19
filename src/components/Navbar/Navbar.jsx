// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';
// import { faHeart } from '@fortawesome/free-regular-svg-icons';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Navbar.css';

// export const Navbar = ({ onUserIconClick }) => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "white" }}>
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">EXCLUSIVE</a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar" style={{ background: "black" }}>
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="mynavbar">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <a className="nav-link" href="/">
//                 Home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/contact" >
//                 Contact
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/about" >
//                 About
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/loginSignUp">
//                 SignUp
//               </a>
//             </li>
//           </ul>

//           <form className="d-flex searchcontainer">
//             <div className="search">
//               <input type="text" placeholder='What are you looking for?' style={{ width: "200px" }} />
//               <a href="#" className="text-dark mx-2">
//                 <FontAwesomeIcon icon={faSearch} />
//               </a>
//             </div>
//           </form>

//           <div className="nav-login-cart d-flex align-items-center ms-3">
//             <a href="/fav" className="text-dark mx-2">
//               <FontAwesomeIcon icon={faHeart} style={{ fontSize: "20px" }} />
//             </a>
//             <div className="nav-cart-count"></div>
//             <a href="/cart" className="text-dark mx-2">
//               <FontAwesomeIcon icon={faCartShopping} style={{ fontSize: "20px" }} />
//             </a>
//             <div className="nav-cart-count"></div>
//             {/* Instead of Link, use an onClick handler to toggle visibility */}
//             <a href="#" className="text-dark mx-2" onClick={onUserIconClick}>
//               <FontAwesomeIcon icon={faUser} style={{ fontSize: "20px" }} />
//             </a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { ShopContext } from "../../context/Shopcontext";

export const Navbar = ({ onUserIconClick }) => {
  const location = useLocation();
  const [isUserActive, setIsUserActive] = useState(false);

  // Check if the current page is the login/signup page
  const isLoginSignUpPage = location.pathname === "/loginSignUp";

  // Fetch context data
  const { getTotalCartItems, getTotalFavoriteItems } = useContext(ShopContext);

  // Handle user icon click
  const handleUserIconClick = () => {
    setIsUserActive((prev) => !prev);
    if (onUserIconClick) onUserIconClick();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "white" }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          EXCLUSIVE
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
          style={{ background: "black" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/" ? "clicked" : ""}`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/contact" ? "clicked" : ""}`}
                to="/contact"
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/about" ? "clicked" : ""}`}
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/loginSignUp" ? "clicked" : ""}`}
                to="/loginSignUp"
              >
                SignUp
              </Link>
            </li>
          </ul>

          <form className="d-flex searchcontainer">
            <div className="search">
              <input
                type="text"
                placeholder="What are you looking for?"
                style={{ width: "200px" }}
              />
              <a href="#" className="text-dark mx-2">
                <FontAwesomeIcon icon={faSearch} />
              </a>
            </div>
          </form>

          {!isLoginSignUpPage && (
            <div className="nav-login-cart d-flex align-items-center ms-3">
              <Link to="/fav" className="text-dark mx-2">
                <FontAwesomeIcon icon={faHeart} style={{ fontSize: "20px" }} />
              </Link>
              <div className="nav-cart-count">{getTotalFavoriteItems()}</div>

              <Link to="/cart" className="text-dark mx-2">
                <FontAwesomeIcon icon={faCartShopping} style={{ fontSize: "20px" }} />
              </Link>
              <div className="nav-cart-count">{getTotalCartItems()}</div>

              <div
                className={`userred ${isUserActive ? "active" : ""}`}
                onClick={handleUserIconClick}
              >
                <a href="#" className="text-dark mx-2">
                  <FontAwesomeIcon icon={faUser} style={{ fontSize: "20px" }} />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

















