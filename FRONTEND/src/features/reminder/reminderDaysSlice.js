import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "https://vaccitracker.herokuapp.com/reminder";
const { jwt } = JSON.parse(localStorage.getItem("user")) || "";

export const fetchReminderDays = createAsyncThunk(
  "days/fetchReminderDays",
  async () => {
    const response = await fetch(API_URL, {
      headers: { Authorization: jwt },
    });
    const data = await response.json();
    return data;
  }
);

export const daySlice = createSlice({
  name: "days",
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchReminderDays.fulfilled]: (state, action) => action.payload,
  },
});

export const selectDays = (state) => state.days;
export default daySlice.reducer;
