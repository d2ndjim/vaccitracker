import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import React, { Fragment, useEffect } from "react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import TempHome from "./pages/TempHome";
import Reminders from "./pages/Reminders";
import Child from "./pages/Child";
import VaccinationWiki from "./pages/VaccinationWiki";
import { useDispatch } from "react-redux";
import { fetchChildren } from "./features/child/childSlice";


import AddChildren from "./pages/AddChildren";

import ProtectedRoutes from "./config/ProtectedRoutes";
import EditChild from "./pages/EditChild";
import ChildrenVaccination from "./pages/ChildrenVaccination";
import Profile from "./pages/Profile";
import Upcoming from "./pages/UpcomingVaccination";
import { fetchReminderDays } from "./features/reminder/reminderDaysSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchChildren());
    dispatch(fetchReminderDays());
  }, [dispatch]);

  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/temphome" element={<TempHome />} />
            <Route path="/children" element={<Child />} />
            <Route path="/reminders" element={<Reminders />} />
            <Route path="/upcoming" element={<Upcoming />} />
            <Route path="/vaccination-wiki" element={<VaccinationWiki />} />
            <Route path="/addchildren" element={<AddChildren />} />
            <Route path="/editChild/:id" element={<EditChild />} />
            <Route path="/vaccination-wiki" element={<VaccinationWiki />} />
            <Route path="/vaccinations/:id" element={<ChildrenVaccination />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer />
    </Fragment>
  );
}

export default App;
