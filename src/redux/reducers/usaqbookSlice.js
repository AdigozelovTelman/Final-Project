import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsaqProductsThunk = createAsyncThunk('api/usaqProduct', async()=>{
    const response = await axios.get('https://book-center-az-backend.vercel.app/usaqProduct/')
    console.log(response);

    return response.data
})
export const postUsaqProductsThunk = createAsyncThunk('api/postTrproduct', async(data)=>{
    const response = await axios.post('https://book-center-az-backend.vercel.app/usaqProduct/', data)
    return response.data
    
})

export const deleteUsaqProductsThunk = createAsyncThunk('api/deleteUsaqproduct', async(id)=>{
    const response = await axios.delete(`https://book-center-az-backend.vercel.app/UsaqProduct/${id}` )
    return id
})

export const usaqproductSlice = createSlice({
    name:'usaqproducts',
    initialState:{
        usaqproducts:[]
    },
    reducers:{},

    extraReducers:builder =>{
        builder
        //get
        .addCase(getUsaqProductsThunk.fulfilled, (state, action)=>{
            state.loading = false
            state.usaqproducts = action.payload
        })
        //post
        .addCase(postUsaqProductsThunk.fulfilled, (state, action)=>{
            state.usaqproducts.push(action.payload)
        })   
        //delete
        .addCase(deleteUsaqProductsThunk.fulfilled, (state, action)=>{
            state.usaqproducts = state.usaqproducts.filter((item)=>item._id  !== action.payload)
        })
    }
})

export default usaqproductSlice.reducer


