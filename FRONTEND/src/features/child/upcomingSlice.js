import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "https://vaccitracker.herokuapp.com/upcoming";
const { jwt } = JSON.parse(localStorage.getItem("user")) || "";

export const fetchUpcoming = createAsyncThunk("upcoming/fetchUpcoming", async () => {
  const response = await fetch(API_URL, {
    headers: { Authorization: jwt },
  });
  const data = await response.json();
  return data;
});

export const upcomingSlice = createSlice({
  name: "upcoming",
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchUpcoming.fulfilled]: (state, action) => action.payload,
  },
});

export const selectUpcoming = (state) => state.upcoming;
export default upcomingSlice.reducer;

