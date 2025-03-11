import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getRusProductsThunk = createAsyncThunk('api/rusProduct', async()=>{
    const response = await axios.get('https://book-center-az-backend.vercel.app/rusProduct/')
    console.log(response);

    return response.data
})
export const postRusProductsThunk = createAsyncThunk('api/postRusproduct', async(data)=>{
    const response = await axios.post('https://book-center-az-backend.vercel.app/rusProduct/', data)
    return response.data
    
})

export const deleteRusProductsThunk = createAsyncThunk('api/deleterRusproduct', async(id)=>{
    const response = await axios.delete(`https://book-center-az-backend.vercel.app/rusProduct/${id}` )
    return id
})

export const rusproductSlice = createSlice({
    name:'rusproducts',
    initialState:{
        rusproducts:[]
    },
    reducers:{},

    extraReducers:builder =>{
        builder
        //get
        .addCase(getRusProductsThunk.fulfilled, (state, action)=>{
            state.loading = false
            state.rusproducts = action.payload
        })
        //post
        .addCase(postRusProductsThunk.fulfilled, (state, action)=>{
            state.rusproducts.push(action.payload)
        })   
        //delete
        .addCase(deleteRusProductsThunk.fulfilled, (state, action)=>{
            state.rusproducts = state.rusproducts.filter((item)=>item._id  !== action.payload)
        })
    }
})

export default rusproductSlice.reducer


