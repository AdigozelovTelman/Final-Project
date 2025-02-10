import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getIngProductsThunk = createAsyncThunk('api/ingProduct', async()=>{
    const response = await axios.get('http://localhost:5000/ingProduct/')
    console.log(response);

    return response.data
})
export const postIngProductsThunk = createAsyncThunk('api/postIngproduct', async(data)=>{
    const response = await axios.post('http://localhost:5000/ingProduct/', data)
    return response.data
    
})

export const deleteIngProductsThunk = createAsyncThunk('api/deleterIngproduct', async(id)=>{
    const response = await axios.delete(`http://localhost:5000/ingProduct/${id}` )
    return id
})

export const ingproductSlice = createSlice({
    name:'ingproducts',
    initialState:{
        ingproducts:[]
    },
    reducers:{},

    extraReducers:builder =>{
        builder
        //get
        .addCase(getIngProductsThunk.fulfilled, (state, action)=>{
            state.loading = false
            state.ingproducts = action.payload
        })
        //post
        .addCase(postIngProductsThunk.fulfilled, (state, action)=>{
            state.ingproducts.push(action.payload)
        })   
        //delete
        .addCase(deleteIngProductsThunk.fulfilled, (state, action)=>{
            state.ingproducts = state.ingproducts.filter((item)=>item._id  !== action.payload)
        })
    }
})

export default ingproductSlice.reducer


