import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import reminderService from "./reminderService";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const updateReminders = createAsyncThunk(
  "reminder/updateReminders",
  async (reminderData, thunkAPI) => {
    try {
      return await reminderService.updateReminders(reminderData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const reminderSlice = createSlice({
  name: "reminder",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateReminders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateReminders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(updateReminders.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = reminderSlice.actions;
export const selectReminder = (state) => state.reminder;
export default reminderSlice.reducer;
