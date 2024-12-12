import { configureStore } from "@reduxjs/toolkit";
import ProductCard from "../components/Card/ProductCard";
import productsSlice from "./Slices/products-slice";

const Store = configureStore({
reducer:{
    ProductCard : productsSlice 
}
})






export default Store;