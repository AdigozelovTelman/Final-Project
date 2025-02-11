import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const postRegisterThunk = createAsyncThunk('api/postregister', async(data)=>{
    const response = await axios.post('http://localhost:5000/register/', data)
    return response.data
    
})


export const registerSlice = createSlice({
    name:'register',
    initialState:{
        registers:[]
    },
    reducers:{},

    extraReducers:builder =>{
        builder
       
        //post
        .addCase(postRegisterThunk.fulfilled, (state, action)=>{
            state.registers.push(action.payload)
        })   
        
    }
})

export default registerSlice.reducer