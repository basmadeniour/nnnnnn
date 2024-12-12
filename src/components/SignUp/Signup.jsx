// import React from "react";
// import "./Signup.css";

// const Signup = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted!");
//     // Add form handling logic here
//   };

//   return (
   
//       <div className="formContainer">
//         <h1 className="heading">Create an account</h1>
//         <p className="subheading">Enter your details below</p>
//         <form className="form" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Name"
//             className="input"
//             name="name"
//           />
//           <input
//             type="email"
//             placeholder="Email or Phone Number"
//             className="input"
//             name="email"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="input"
//             name="password"
//           />
//           <button type="submit" className="createAccountButton">
//             Create Account
//           </button>
//         </form>
//         <button className="googleButton">
//           Sign up with Google
//         </button>
//         <p className="loginText">
//           Already have an account?{" "}
//           <a href="/login" className="loginLink">
//             Log in
//           </a>
//         </p>
//       </div>
//   );
// };

// export default Signup;


import React, { useState } from "react";
import "./Signup.css";

const Signup = ({ onSignup }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignup(formData); // Pass form data to parent
  };

  return (
    <div>
      <h1 className="heading">Create an account</h1>
      <p className="subheading">Enter your details below</p>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          className="input"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />
        <input
          type="email"
          placeholder="Email or Phone Number"
          className="input"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="password"
          placeholder="Password"
          className="input"
          name="password"
          onChange={handleChange}
          value={formData.password}
        />
        <button
          type="submit"
          className="createAccountButton"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signup;




