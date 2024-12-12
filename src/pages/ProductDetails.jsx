import React, { useContext } from 'react';
import { ShopContext } from "../context/Shopcontext";
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrums/Breadcrum';

const ProductDetails = () => {
    const { all_product } = useContext(ShopContext);
    const { productdetailsId } = useParams();

    // Safely find the product
    const productdetails = all_product?.find((product) => product.id === Number(productdetailsId));

    // Handle cases where data is not ready
    if (!all_product) {
        return <div>Loading products...</div>;
    }

    // Handle product not found
    if (!productdetails) {
        return <div>Product not found. Please check the URL or try again later.</div>;
    }

    return (
        <div style={{paddingTop:"20px"}}>
            {/* Breadcrumb Component */}
            <Breadcrum productdetails={productdetails} />

            {/* Product Details Section */}
            {/* <div className="product-details">
                <h1>{productdetails.name}</h1>
                <img src={productdetails.image} />
                <p>{productdetails.description}</p>
                
            </div> */}
        </div>
    );
};

export default ProductDetails;



