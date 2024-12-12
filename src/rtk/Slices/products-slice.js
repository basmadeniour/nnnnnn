import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import all_product from "../../components/Assets/all_product";

 export  const fetchproducts = createAsyncThunk("productsSlice/fetchproduct",async()=>{
  const res =await  fetch(all_product);
  const data =  await res.json();
  return data;
})

const productsSlice = createSlice({

    initialState:[],
    name :"productsSlice",
    reducers:{},
    extraReducers:(builder)=>{
         builder.addCase(fetchproducts.fulfilled,(state , action)=>{
            return action.payload
         })
    }
})

export const {}= productsSlice.actions;
export default productsSlice .reducer;
