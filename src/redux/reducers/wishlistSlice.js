import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getWishlistThunk = createAsyncThunk('api/wishlist', async () => {
    const response = await axios.get('https://book-center-az-backend.vercel.app/wishlist/')
    console.log(response);

    return response.data
})

export const postWishlistThunk = createAsyncThunk("api/postwishlist", async (data) => {
    axios.get("https://book-center-az-backend.vercel.app/wishlist/")
        .then((res) => {
            const existingproducts = res.data.find((item) => item.title == data.title)

            if (existingproducts) {
                alert("Artıq sevimlilərdə var")
            }
            else {
                axios.post("https://book-center-az-backend.vercel.app/wishlist", data)
            }
        })

})

export const deleteWishlistThunk = createAsyncThunk('api/deletewishlist', async (id) => {
    const response = await axios.delete(`https://book-center-az-backend.vercel.app/wishlist/${id}`)
    return id
})

export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        wishlist: []
    },
    reducers: {},

    extraReducers: builder => {
        builder
            //get
            .addCase(getWishlistThunk.fulfilled, (state, action) => {
                state.loading = false
                state.wishlist = action.payload
            })
            //post
            .addCase(postWishlistThunk.fulfilled, (state, action) => {
                state.wishlist.push(action.payload)

            })
            //delete
            .addCase(deleteWishlistThunk.fulfilled, (state, action) => {
                state.wishlist = state.wishlist.filter((item) => item._id !== action.payload)
            })
    }
})

export default wishlistSlice.reducer


