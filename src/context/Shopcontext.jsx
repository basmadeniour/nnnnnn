import React, { createContext, useState, useEffect } from "react";
import all_product from "../components/Assets/all_product";

// Create context
export const ShopContext = createContext(null);

// Initialize cart with default data from localStorage
const getDefaultCart = () => {
  try {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : {};
  } catch (error) {
    console.error("Failed to parse cart items from localStorage", error);
    return {};
  }
};

// Initialize favorites with default data from localStorage
const getDefaultFavorites = () => {
  try {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  } catch (error) {
    console.error("Failed to parse favorites from localStorage", error);
    return [];
  }
};

const ShopcontextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [favorites, setFavorites] = useState(getDefaultFavorites());

  // Sync cart with localStorage dynamically
  useEffect(() => {
    try {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } catch (error) {
      console.error("Failed to save cart to localStorage", error);
    }
  }, [cartItems]);

  // Sync favorites with localStorage dynamically
  useEffect(() => {
    try {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } catch (error) {
      console.error("Failed to save favorites to localStorage", error);
    }
  }, [favorites]);

  // Add product to cart
  const addToCart = (product) => {
    setCartItems((prev) => ({
      ...prev,
      [product.id]: {
        ...(prev[product.id] || product),
        quantity: (prev[product.id]?.quantity || 0) + 1,
      },
    }));
  };

  // Remove product from cart dynamically
  const removeFromCart = (id) => {
    if (!id) {
      console.error("No product ID provided for removal.");
      return;
    }

    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[id]?.quantity > 1) {
        updatedCart[id].quantity -= 1;
      } else {
        delete updatedCart[id];
      }
      return updatedCart;
    });
  };

  // Add product to favorites, avoiding duplicates
  const addToFavorites = (product) => {
    setFavorites((prev) => {
      const isAlreadyFavorite = prev.some((fav) => fav.id === product.id);

      if (isAlreadyFavorite) {
        console.log("Item already in favorites.");
        return prev; // Avoid duplicates
      }

      const newFavorites = [...prev, product];
      return newFavorites;
    });
  };

// Remove product from favorites dynamically and sync with localStorage
const removeFromFavorites = (productId) => {
  setFavorites((prev) => {
    const updatedFavorites = prev.filter((fav) => fav.id !== productId);

    // Update localStorage after state is set
    try {
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      console.log("fff")
    } catch (error) {
      console.error("Failed to sync favorites with localStorage", error);
      console.log("fff")
    }

    return updatedFavorites;
  });
};


  // Calculate the total amount of items in the cart
  const getTotalCartAmount = () => {
    return Object.keys(cartItems).reduce((total, itemId) => {
      const item = all_product.find((product) => product.id === Number(itemId));
      return item
        ? total + item.new_price * cartItems[itemId].quantity
        : total;
    }, 0);
  };

  // Get total items in the cart
  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce((sum, item) => sum + (item?.quantity || 0), 0);
  };

  // Get total number of favorite items
  const getTotalFavoriteItems = () => {
    return favorites.length;
  };

  return (
    <ShopContext.Provider
      value={{
        all_product,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        favorites,
        setFavorites,
        addToFavorites,
        removeFromFavorites,
        getTotalCartItems,
        getTotalFavoriteItems,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopcontextProvider;














