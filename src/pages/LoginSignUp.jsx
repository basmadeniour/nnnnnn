import React, { useState, useEffect } from "react";
import Login from "../components/Login/Login";
import Signup from "../components/SignUp/Signup";
import Footer from "../components/Footer/Footer";
import Loginimg from "../components/Assets/login.jpg";
import "./LoginSignUp.css";

const LoginSignUp = () => {
  const [showLogin, setShowLogin] = useState(true);

  // Load user data state on page refresh
  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      setShowLogin(true);
    } else {
      setShowLogin(false);
    }
  }, []);

  const handleSignup = (formData) => {
    console.log("Signup successful!", formData);

    // Save signup data to localStorage
    localStorage.setItem("userData", JSON.stringify(formData));
    alert("You successfully created an account!");
  };

  const handleLogin = (email, password) => {
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (userData && userData.email === email && userData.password === password) {
      alert("Login successful!");
    } else {
      alert("Invalid credentials. Please check your email and password.");
    }
  };

  return (
    <>
      <div className="row login-container">
        {/* Left Image Section */}
        <div className="col-12 col-md-6 login-img-container">
          <img src={Loginimg} alt="Login" className="login-img" />
        </div>

        {/* Right Form Section */}
        <div className="col-12 col-md-6 form-container">
          {showLogin ? (
            <Login onLogin={handleLogin} />
          ) : (
            <Signup onSignup={handleSignup} />
          )}

          {/* Toggle Logic */}
          <p className="toggleText">
            {showLogin ? (
              <>
                Don't have an account?{" "}
                <button
                  className="toggleButton"
                  onClick={() => setShowLogin(false)}
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  className="toggleButton"
                  onClick={() => setShowLogin(true)}
                >
                  Log in
                </button>
              </>
            )}
          </p>
        </div>
      </div>

   
    </>
  );
};

export default LoginSignUp;














