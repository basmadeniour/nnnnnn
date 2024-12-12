// import React, { useState } from 'react';
// import './App.css';
// import Navbar from './components/Navbar/Navbar';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from "./pages/Home";
// import About from "./pages/about";
// import Contact from "./pages/contact";
// import Userinfo from "./pages/Userinfo";
// import LoginSignUp from './pages/LoginSignUp';
// import ProductDetails from './pages/ProductDetails';
// import Cart  from './pages/Cart';
// import Fava from './pages/Fava';
// import Category from './pages/Category';
// import Profile from './pages/Profile';
// import Footer from './components/Footer/Footer';

// function App() {
//   const [showUserInfo, setShowUserInfo] = useState(false);

//   const handleUserIconClick = () => {
//     setShowUserInfo(prevState => !prevState);
//   };

//   return (
//     <div>
//       <BrowserRouter>
//         {/* Navbar with User Icon toggle handler */}
//         <Navbar onUserIconClick={handleUserIconClick} />

//         {/* Set up routing */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/LoginSignUp" element={<LoginSignUp />} />
//           <Route path="/Profile" element={<Profile />} />
//           <Route path="/productdetails/:productdetailsId" element={<ProductDetails />} />
//           <Route path="/fav" element={<Fava />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/mens" element={<Category category="mens" />} />
//           <Route path="/womens" element={<Category category="womens" />} />
//           <Route path="/electronics" element={<Category category="electronics" />} />
//           <Route path="/lifestyle" element={<Category category="lifestyle" />} />
//           <Route path="/medicine" element={<Category category="medicine" />} />
//           <Route path="/sport" element={<Category category="sport" />} />
//           <Route path="/toys" element={<Category category="toys" />} />
//           <Route path="/pets" element={<Category category="pets" />} />
//           <Route path="/health" element={<Category category="health" />} />
//           <Route path="*" element={<Category />} />
//         </Routes>

//         {/* Conditionally render Userinfo only if toggled */}
//         {showUserInfo && <Userinfo />}
//       </BrowserRouter>

//       <Footer />
//     </div>
//   );
// }

// export default App;



import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


// Import shared components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Import pages
import Home from './pages/Home';
import About from './pages/about';
import Contact from './pages/contact';
import LoginSignUp from './pages/LoginSignUp';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Fava from './pages/Fava';
import Profile from './pages/Profile';
import Category from './pages/Category';
import UserInfo from './pages/Userinfo';
import BillingDetails from "./pages/BillingDetails"

// Import context provider
import ShopcontextProvider from './context/Shopcontext';

function App() {
  const [showUserInfo, setShowUserInfo] = useState(false);

  // Toggle user info modal on icon click
  const handleUserIconClick = () => {
    setShowUserInfo((prevState) => !prevState);
  };

  return (
    <ShopcontextProvider>
      <div className="App">
        <BrowserRouter>
          {/* Navbar with click handler for showing user info */}
          <Navbar onUserIconClick={handleUserIconClick} />

          {/* Application Routes */}
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Authentication Pages */}
            <Route path="/loginsignup" element={<LoginSignUp />} />

            {/* User/Account Pages */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/userinfo" element={<UserInfo />} />

            {/* Product & Cart Pages */}
            <Route path="/productdetails/:productdetailsId" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/fav" element={<Fava />} />
            <Route path="/BillingDetails" element={<BillingDetails />} />

            {/* Category Routing */}
            <Route path="/mens" element={<Category category="mens" />} />
            <Route path="/womens" element={<Category category="womens" />} />
            <Route path="/electronics" element={<Category category="electronics" />} />
            <Route path="/lifestyle" element={<Category category="lifestyle" />} />
            <Route path="/medicine" element={<Category category="medicine" />} />
            <Route path="/sport" element={<Category category="sport" />} />
            <Route path="/toys" element={<Category category="toys" />} />
            <Route path="/pets" element={<Category category="pets" />} />
            <Route path="/health" element={<Category category="health" />} />

            {/* Fallback Route */}
            <Route path="*" element={<Home />} />
          </Routes>

          {/* Conditional rendering for User Info */}
          {showUserInfo && <UserInfo />}
        </BrowserRouter>

        {/* Always visible footer */}
        <Footer />
      </div>
    </ShopcontextProvider>
  );
}

export default App;






