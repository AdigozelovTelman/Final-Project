// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Async Thunks
// export const registerUser = createAsyncThunk(
//   'user/register',
//   async (userData, { rejectWithValue }) => {
//     try {
//       const response = await axios.post('/api/users/register', userData);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const loginUser = createAsyncThunk(
//   'user/login',
//   async (userData, { rejectWithValue }) => {
//     try {
//       const response = await axios.post('/api/users/login', userData);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const logoutUser = createAsyncThunk(
//   'user/logout',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.post('/api/users/logout');
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const getUserDetails = createAsyncThunk(
//   'user/getUserDetails',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get('/api/users/profile');
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// // Slice
// const userSlice = createSlice({
//   name: 'user',
//   initialState: {
//     userInfo: null,
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(registerUser.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(registerUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.userInfo = action.payload;
//       })
//       .addCase(registerUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       .addCase(loginUser.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.userInfo = action.payload;
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       .addCase(logoutUser.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(logoutUser.fulfilled, (state) => {
//         state.loading = false;
//         state.userInfo = null;
//       })
//       .addCase(logoutUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       .addCase(getUserDetails.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(getUserDetails.fulfilled, (state, action) => {
//         state.loading = false;
//         state.userInfo = action.payload;
//       })
//       .addCase(getUserDetails.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default userSlice.reducer;