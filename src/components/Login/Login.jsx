// import React from 'react'
// import "./Login.css"

// export const Login = () => {
//   return (
    // <div className="col-12 col-md-3 login-form-container">
    //     <div className="form-wrapper">
    //       <h1 className="heading">Log in to Exclusive</h1>
    //       <p className="subheading">Enter your details below</p>
    //       <form className="form">
    //         <input
    //           type="email"
    //           placeholder="Email or Phone Number"
    //           className="input"
    //         />
    //         <br />
    //         <input type="password" placeholder="Password" className="input" />
    //         <br />
    //         <button type="submit" className="loginButton">
    //           Log In
    //         </button>
    //         <p className="forgotPassword">
    //         <a href="/forgot-password" className="forgotPasswordLink">
    //           Forget Password?
    //         </a>
    //       </p>
    //       </form>
          
    //     </div>
    //   </div>
//   )
// }

// export default Login;

import React, { useState } from "react";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password); // Pass login data to parent
  };

  return (
    <div className="logggginnn">
      <h1 className="heading">Log in to your account</h1>
      <p className="subheading">Enter your login details below</p>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email or Phone Number"
          className="input"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="input"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit" className="loginButton">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;



