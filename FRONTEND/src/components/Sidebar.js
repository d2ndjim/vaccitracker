/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FolderPlus, Home, Users, Bell, User, LogOut } from "react-feather";
import { logout, reset } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import logo from "../assets/img/sidebar-logo.png";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <>
      <style>
        {`
          .navbar .navbar-toggler {
              top: .45rem;
              right: 1rem;
          }
            
          .navbar .form-control {
              padding: .75rem 1rem;
          }

          .nav-link:active {
            color: #F76600; !important;
          }

          .active {
            border-right: 6px solid #F76600;
            padding-left: 4px;
          }

        `}
      </style>
      <header className="navbar sticky-top flex-md-nowrap p-0 mt-4">
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-nav"></div>
      </header>
      <div className="container-fluid">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-4 col-lg-4 d-md-block sidebar collapse"
            style={{ backgroundColor: "#054689" }}
          >
            <a
              className="navbar-brand col-md-3 col-lg-4 me-4  px-3 fs-6 "
              href="/temphome"
            >
              <img
                src={logo}
                alt="Vaccitracker logo"
                className="mx-4"
                style={{ height: "40px", width: "130px" }}
              />
            </a>
            <div className="position-sticky pt-3 sidebar-sticky">
              <ul className="nav flex-column mt-4">
                <li className="nav-item">
                  <NavLink
                    to="/temphome"
                    className="nav-link text-white"
                    aria-current="page"
                  >
                    <span className="align-text-bottom m-4">
                      <Home />
                    </span>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-white"
                    to="/children"
                    
                  >
                    <span className="align-text-bottom m-4">
                      <Users />
                    </span>
                    Children
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-white"
                    to="/vaccination-wiki"
                  >
                    <span className="align-text-bottom m-4">
                      <FolderPlus />
                    </span>
                    Vaccination Wiki
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/upcoming">
                    <span className="align-text-bottom m-4">
                      <Bell />
                    </span>
                    Reminders
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/profile">
                    <span className="align-text-bottom m-4">
                      <User />
                    </span>
                    Profile
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className="nav-link text-white"
                    onClick={onLogout}
                  >
                    <span className="align-text-bottom m-4">
                      <LogOut />
                    </span>
                    Log out
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
