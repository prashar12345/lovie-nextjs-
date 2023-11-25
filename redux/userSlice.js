// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import Cookies from "js-cookie";
// import { getFromStorage } from "../functions/getFromStorage";
// import { setToStorage } from "../functions/setToStorage";
// import db from "../utils/db";

// const host = "http://localhost:3000";

// export const login = createAsyncThunk("/user/login", async (user) => {
//   await db.connect();

//   const { data } = await axios.post(`${host}/api/auth/login`, user);
//   setToStorage("userInfo", JSON.stringify(data));
//   console.log(data);

//   db.disconnect();

//   return data;
// });

// export const register = createAsyncThunk("/user/register", async (user) => {
//   db.connect();

//   const { data } = await axios.post(`${host}/api/auth/register`, user);
//   setToStorage("userInfo", JSON.stringify(data));
//   console.log(data);

//   db.disconnect();
//   return data;
// });

// export const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     userInfo: getFromStorage("userInfo")
//       ? JSON.parse(getFromStorage("userInfo"))
//       : null,
//     pending: null,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: {
//     [login.pending]: (state) => {
//       state.pending = true;
//       state.error = false;
//     },
//     [login.fulfilled]: (state, action) => {
//       state.userInfo = action.payload;
//       state.false = false;
//     },
//     [login.pending]: (state) => {
//       state.pending = false;
//       state.error = true;
//     },
//     [register.pending]: (state) => {
//       state.pending = true;
//       state.error = false;
//     },
//     [register.fulfilled]: (state, action) => {
//       state.userInfo = action.payload;
//       state.false = false;
//     },
//     [register.pending]: (state) => {
//       state.pending = false;
//       state.error = true;
//     },
//   },
// });

// export default userSlice.reducer;
