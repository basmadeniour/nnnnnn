import React, { useContext } from 'react';
import { ShopContext } from '../../context/Shopcontext';
import { Link } from "react-router-dom";
import "./Cartitems.css";

export const Cartitems = () => {
  const { cartItems, removeFromCart, addToCart, setCartItems } = useContext(ShopContext);

  const cartItemsArray = Object.entries(cartItems)
    .filter(([key, value]) => value.quantity > 0)
    .map(([key, value]) => ({ ...value, id: key }));

  const handleResetCart = () => {
    setCartItems({}); // Clear cart items
    alert("Cart has been cleared!");
  };

  return (
    <div className="cartItems">
      <div className="cartitems-format-main row">
        <div className='col-3'><p>Product</p></div>
        <div className='col-3'><p>Price</p></div>
        <div className='col-3'><p>Quantity</p></div>
        <div className='col-3'><p>Total</p></div>
      </div>
      <hr />
      {cartItemsArray.map((props) => (
        <div key={props.id}>
          <div className="cartitems-format row">
            <div className='col-3'>
              <img
                src={props.image || '/images/default-image.png'}
                alt={props.name || 'Product'}
                className="carticon-product-icon"
              />
            </div>
            <div className='col-3'><p>${props.new_price?.toFixed(2) || '0.00'}</p></div>
            <div className="quantity-container col-3">
              <button onClick={() => removeFromCart(props.id)}>-</button>
              <div className='quantttity'>{props.quantity || 0}</div>
              <button onClick={() => addToCart(props)}>+</button>
            </div>
            <div className='col-3'>
              <p>${((props.new_price || 0) * (props.quantity || 0)).toFixed(2)}</p>
            </div>
          </div>
          <hr />
        </div>
      ))}

      <div className="backandreset row">
        <div className="back col-6">
          <Link to="/">
            <button className="backbttttn">Back to Shop</button>
          </Link>
        </div>
        <div className="reset col-6">
          <button className="resetbtn" onClick={handleResetCart}>
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cartitems;
















