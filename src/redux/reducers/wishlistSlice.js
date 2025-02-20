import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getWishlistThunk = createAsyncThunk('api/wishlist', async () => {
    const response = await axios.get('http://localhost:5000/wishlist/')
    console.log(response);

    return response.data
})

export const postWishlistThunk = createAsyncThunk("api/postwishlist", async (data) => {
    axios.get("http://localhost:5000/wishlist/")
        .then((res) => {
            const existingproducts = res.data.find((item) => item.title == data.title)

            if (existingproducts) {
                alert("Artıq sevimlilərdə var")
            }
            else {
                axios.post("http://localhost:5000/wishlist", data)
            }
        })

})

export const deleteWishlistThunk = createAsyncThunk('api/deletewishlist', async (id) => {
    const response = await axios.delete(`http://localhost:5000/wishlist/${id}`)
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


