import React from "react";
import logo from "../assets/img/vaccitracker-logo-footer.png";

const Footer = () => {
  return (
    <div className="container-fluid footer gilroy">
      <footer className="">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <img className="img-fluid mt-3" src={logo} alt="" />
        </ul>
        <ul className="nav foot-item justify-content-center border-bottom pb-4">
          <li className="nav-item px-3">Vaccitracker</li>
          <li className="nav-item px-3">Terms of service</li>
          <li className="nav-item px-3">Privacy Privacy</li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
