import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getNotebookProductsThunk = createAsyncThunk('api/notebookProduct', async () => {
    const response = await axios.get('https://book-center-az-backend.vercel.app/notebookProduct')
    console.log(response);

    return response.data
})
export const postNotebookProductsThunk = createAsyncThunk('api/postnotebookproduct', async (data) => {
    const response = await axios.post('https://book-center-az-backend.vercel.app/notebookProduct', data)
    return response.data

})

export const deleteNotebookProductsThunk = createAsyncThunk('api/deletenotebookproduct', async (id) => {
    const response = await axios.delete(`https://book-center-az-backend.vercel.app/notebookProduct/${id}`)
    return id
})

export const notebookproductSlice = createSlice({
    name: 'notebookproducts',
    initialState: {
        notebookproducts: [] 
    },
    reducers: {},

    extraReducers: builder => {
        builder
            //get
            .addCase(getNotebookProductsThunk.fulfilled, (state, action) => {
                state.loading = false
                state.notebookproducts = action.payload
            })
            //post
            .addCase(postNotebookProductsThunk.fulfilled, (state, action) => {
                state.notebookproducts.push(action.payload)
            })
            //delete
            .addCase(deleteNotebookProductsThunk.fulfilled, (state, action) => {
                state.notebookproducts = state.notebookproducts.filter((item) => item._id !== action.payload)
            })
    }
})

export default notebookproductSlice.reducer


