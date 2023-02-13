/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/img/logo.png";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";


function Navbar() {
  const { user } = useSelector((state) => state.auth);
  return (
    <nav
      className="navbar navbar-expand-md bg-light gilroy"
      aria-label="Eighth navbar example"
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Vaccitracker logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample07"
          aria-controls="navbarsExample07"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample07">
          <ul className="navbar-nav me-auto mb-2 mb-md-0"></ul>
          {user ? (
            <div className="mb-1">
              <Link to="/temphome">
                <PrimaryButton  
                  class="btn"
                  text="Go to dashboard"
                  type="submit"
                ></PrimaryButton>
              </Link>
            </div>
          ) : (
            <>
              <div className="mb-1">
                <Link to="/login">
                  <SecondaryButton text="Login"></SecondaryButton>
                </Link>
              </div>
              <div className="mb-1">
                <Link to="/signup">
                  <PrimaryButton
                    class="btn"
                    text="Get started for free"
                    type="submit"
                  ></PrimaryButton>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
