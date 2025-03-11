import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getBagProductsThunk = createAsyncThunk('api/bagProduct', async () => {
    const response = await axios.get('https://book-center-az-backend.vercel.app/bagProduct')
    console.log(response);

    return response.data
})
export const postBagProductsThunk = createAsyncThunk('api/postGiftproduct', async (data) => {
    const response = await axios.post('https://book-center-az-backend.vercel.app/bagProduct', data)
    return response.data

})

export const deleteBagProductsThunk = createAsyncThunk('api/deleteBagproduct', async (id) => {
    const response = await axios.delete(`https://book-center-az-backend.vercel.app/bagProduct/${id}`)
    return id
})

export const bagproductSlice = createSlice({
    name: 'bagproducts',
    initialState: {
        bagproducts: [] 
    },
    reducers: {},

    extraReducers: builder => {
        builder
            //get
            .addCase(getBagProductsThunk.fulfilled, (state, action) => {
                state.loading = false
                state.bagproducts = action.payload
            })
            //post
            .addCase(postBagProductsThunk.fulfilled, (state, action) => {
                state.bagproducts.push(action.payload)
            })
            //delete
            .addCase(deleteBagProductsThunk.fulfilled, (state, action) => {
                state.bagproducts = state.bagproducts.filter((item) => item._id !== action.payload)
            })
    }
})

export default bagproductSlice.reducer


