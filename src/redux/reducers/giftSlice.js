import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getGiftProductsThunk = createAsyncThunk('api/giftProduct', async () => {
    const response = await axios.get('https://book-center-az-backend.vercel.app/giftProduct')
    console.log(response);

    return response.data
})
export const postGiftProductsThunk = createAsyncThunk('api/postGiftproduct', async (data) => {
    const response = await axios.post('https://book-center-az-backend.vercel.app/giftProduct', data)
    return response.data

})

export const deleteGiftProductsThunk = createAsyncThunk('api/deleteGiftproduct', async (id) => {
    const response = await axios.delete(`https://book-center-az-backend.vercel.app/giftProduct/${id}`)
    return id
})

export const giftproductSlice = createSlice({
    name: 'giftproducts',
    initialState: {
        giftproducts: [] 
    },
    reducers: {},

    extraReducers: builder => {
        builder
            //get
            .addCase(getGiftProductsThunk.fulfilled, (state, action) => {
                state.loading = false
                state.giftproducts = action.payload
            })
            //post
            .addCase(postGiftProductsThunk.fulfilled, (state, action) => {
                state.giftproducts.push(action.payload)
            })
            //delete
            .addCase(deleteGiftProductsThunk.fulfilled, (state, action) => {
                state.giftproducts = state.giftproducts.filter((item) => item._id !== action.payload)
            })
    }
})

export default giftproductSlice.reducer


