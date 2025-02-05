import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getBasketThunk = createAsyncThunk('api/basket', async()=>{
    const response = await axios.get('http://localhost:5000/basket/')
    console.log(response);

    return response.data
})
export const postBasketThunk = createAsyncThunk('api/postbasket', async(data)=>{
    const response = await axios.post('http://localhost:5000/basket/', data)
    return response.data
    
    
})
export const deleteBasketThunk = createAsyncThunk('api/deletebasket', async(id)=>{
    const response = await axios.delete(`http://localhost:5000/basket/${id}` )
    return id
})

export const basketSlice = createSlice({
    name:'basket',
    initialState:{
        basket:[]
    },
    reducers:{},

    extraReducers:builder =>{
        builder
       
        .addCase(getBasketThunk.fulfilled, (state, action)=>{
            state.loading = false
            state.basket = action.payload
        })
        //post
        .addCase(postBasketThunk.fulfilled, (state, action)=>{
            state.basket.push(action.payload)
        })   
        //delete
        .addCase(deleteBasketThunk.fulfilled, (state, action)=>{
            state.basket = state.basket.filter((item)=>item._id  !== action.payload)
        })
    }
})

export default basketSlice.reducer


