import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/Shopcontext";
import Cartitems from "../components/Cartitems/Cartitems";
import { Link } from "react-router-dom";
import "./Cart.css";

// Calculate the total cart amount
const getTotalCartAmount = (cartItems = {}, all_product = []) => {
  let totalAmount = 0;

  for (const itemId in cartItems) {
    if (cartItems[itemId]?.quantity > 0) {
      const itemInfo = all_product.find((product) => product.id === Number(itemId));
      if (itemInfo) {
        totalAmount += itemInfo.new_price * cartItems[itemId].quantity;
      }
    }
  }

  return totalAmount;
};

const Cart = () => {
  const { cartItems, all_product } = useContext(ShopContext);
  const totalCartAmount = getTotalCartAmount(cartItems, all_product);

  useEffect(() => {
    console.log("Context cartItems or all_product has changed.");
  }, [cartItems, all_product]);

  if (Object.keys(cartItems).length === 0) {
    return (
      <div className="cartttt">
        <h2>Your cart is empty!</h2>
        <Link to="/">Go shopping</Link>
      </div>
    );
  }

  return (
    <div className="cartttt">
      <div className="Cartitems">
        <Cartitems items={cartItems} />
      </div>

      <div className="carttosides row">
        {/* Coupon Section */}
        <div className="copooon col-12 col-md-4">
          <input
            type="text"
            placeholder="Enter your Coupon"
            className="coponinput"
            aria-label="Enter your coupon code"
          />
          <button className="coponbtn">Apply Coupon</button>
        </div>
        
        {/* Cart Total Section */}
        <div className="carttotaaal col-12 col-md-4">
          <h6 className="h6cart">Cart Total</h6>
          <p>
            Subtotal: <span className="kmjjpokpo">${totalCartAmount}</span>
          </p>
          <hr />
          <p>
            Shipping: <span className="lastspan">Free</span>
          </p>
          <hr />
          <p>
            Total: <span className="kmjjpokpohh">${totalCartAmount}</span>
          </p>
          <Link to="/BillingDetails">
            <button className="ProcressToCheckouy">Process To Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;









// import React from 'react';
// import Cartitems from '../components/Cartitems/Cartitems';
// import "./Cart.css";
// import productdetails from "../pages/ProductDetails";
// import Breadcrum from '../components/Breadcrums/Breadcrum';

// const Cart = () => {
//   return (
//     <div>
//       {/* Breadcrumb Component */}
//       {/* <Breadcrum productdetails={productdetails} /> */}

//       {/* Cart Items Section */}
//       <div className="Cartitems">
//         <Cartitems />
//       </div>

//       {/* Product Details Section */}
//       {/* <div className="product-details">
//         <h1>{productdetails.name}</h1>
//         <img src={productdetails.image} alt={productdetails.name} />
//         <p>{productdetails.description}</p>
//       </div> */}
//     </div>
//   );
// };

// export default Cart;



// import React, { useContext } from "react";
// import  ShopContext from "../context/Shopcontext";

// const Cart = () => {
//   const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

//   const cartArray = Object.values(cartItems);

//   return (
//     <div className="cart">
      
//       <h2>Shopping Cart</h2>
//       {cartArray.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         cartArray.map((item) => (
//           <div key={item.id} className="cart-item">
//             <img src={item.image} alt={item.name} />
//             <h3>{item.name}</h3>
//             <p>${item.price}</p>
//             <div className="quantity">
//               <button onClick={() => removeFromCart(item.id)}>-</button>
//               <span>{item.quantity}</span>
//               <button onClick={() => addToCart(item)}>+</button>
//             </div>
//             <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Cart;






