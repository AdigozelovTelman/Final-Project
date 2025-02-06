import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTrProductsThunk = createAsyncThunk('api/trProduct', async()=>{
    const response = await axios.get('http://localhost:5000/trProduct/')
    console.log(response);

    return response.data
})
export const postTrProductsThunk = createAsyncThunk('api/postTrproduct', async(data)=>{
    const response = await axios.post('http://localhost:5000/trProduct/', data)
    return response.data
    
})

export const deleteTrProductsThunk = createAsyncThunk('api/deleteTrproduct', async(id)=>{
    const response = await axios.delete(`http://localhost:5000/trProduct/${id}` )
    return id
})

export const trproductSlice = createSlice({
    name:'trproducts',
    initialState:{
        trproducts:[]
    },
    reducers:{},

    extraReducers:builder =>{
        builder
        //get
        .addCase(getTrProductsThunk.fulfilled, (state, action)=>{
            state.loading = false
            state.trproducts = action.payload
        })
        //post
        .addCase(postTrProductsThunk.fulfilled, (state, action)=>{
            state.trproducts.push(action.payload)
        })   
        //delete
        .addCase(deleteTrProductsThunk.fulfilled, (state, action)=>{
            state.trproducts = state.trproducts.filter((item)=>item._id  !== action.payload)
        })
    }
})

export default trproductSlice.reducer


