import React, { useContext } from 'react';
import { ShopContext } from '../../context/Shopcontext';
import DeletedCard from '../DeletedCard';

export const FavItems = () => {
  const { favorites } = useContext(ShopContext);

  return (
    <div className="fav-items-main-container">
      <h2>Your Favorites</h2>
      <DeletedCard favorites={favorites} />
    </div>
  );
};

export default FavItems;




