import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductsThunk = createAsyncThunk('api/product', async()=>{
    const response = await axios.get('https://book-center-az-backend.vercel.app/product/')
    console.log(response);

    return response.data
})
export const postProductsThunk = createAsyncThunk('api/postproduct', async(data)=>{
    const response = await axios.post('https://book-center-az-backend.vercel.app/product/', data)
    return response.data
    
})

export const deleteProductsThunk = createAsyncThunk('api/deleteproduct', async(id)=>{
    const response = await axios.delete(`https://book-center-az-backend.vercel.app/product/${id}` )
    return id
})

export const productSlice = createSlice({
    name:'products',
    initialState:{
        products:[]
    },
    reducers:{},

    extraReducers:builder =>{
        builder
        //get
        .addCase(getProductsThunk.fulfilled, (state, action)=>{
            state.loading = false
            state.products = action.payload
        })
        //post
        .addCase(postProductsThunk.fulfilled, (state, action)=>{
            state.products.push(action.payload)
        })   
        //delete
        .addCase(deleteProductsThunk.fulfilled, (state, action)=>{
            state.products = state.products.filter((item)=>item._id  !== action.payload)
        })
    }
})

export default productSlice.reducer


