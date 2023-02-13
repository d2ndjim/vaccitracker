import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import childReducer from "../features/child/childSlice";
import upcomingReducer from "../features/child/upcomingSlice";
import wardReducer from "../features/child/wardSlice";
import reminderReducer from "../features/reminder/reminderSlice";
import dayReducer from "../features/reminder/reminderDaysSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    children: childReducer,
    ward: wardReducer,
    upcoming: upcomingReducer,
    reminder: reminderReducer,
    days: dayReducer,
  },
});

export default store;
