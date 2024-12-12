import React, { useContext } from "react";
import { ShopContext } from "../../context/Shopcontext";
import { Link } from "react-router-dom";
import "./DeletedCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export const DeletedCard = ({ id, name, product_img, newprice, salebg, salepersent }) => {
  const { removeFromFavorites } = useContext(ShopContext);

  const handleRemoveFavorite = () => {
    removeFromFavorites(id); // Remove item from favorites
  };

  return (
    <div className="carddiv">
      <div className="divphoto">
        <div className="divsale" style={{ backgroundColor: salebg }}>
          {salepersent}
        </div>
        <img className="deletedimmmg" src={product_img} alt={name} />

        {/* Trash Icon for removing from favorites */}
        <div className="fav-more">
          <div className="trashdiv" onClick={handleRemoveFavorite}>
            <FontAwesomeIcon
              icon={faTrashCan}
              style={{ color: "red", cursor: "pointer" }}
            />
          </div>
        </div>

        <Link to={`/productdetails/${id}`}>
          <div className="addtocart">Add to cart</div>
        </Link>
      </div>

      <div className="productdetails">
        <p className="itemname">{name}</p>
        <p className="pnewprice">
          {"$" + newprice}
          <span className="spanoldprice">
            <del>{"$" + newprice * 1.2}</del>
          </span>
        </p>
      </div>
    </div>
  );
};

export default DeletedCard;



