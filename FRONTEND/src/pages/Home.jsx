import React from "react";
import child from "../assets/img/child.png";
import injection from "../assets/img/injection.png";
import bro from "../assets/img/bro.png";
import articles from "../assets/img/articles.png";
import reminders from "../assets/img/reminders.png";
import management from "../assets/img/management.png";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import PrimaryButton from "../components/PrimaryButton";

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="wrapper">
      <Navbar />
      <main>
        <div className="container gilroy-light">
          <div className="row rounded-3">
            <div className="col-md-6 mt-3 py-5">
              <h3 className="display-5 h-font">
                Remember your child’s Immunization appointments with
                Vaccitracker
              </h3>
              <p className="sub-h-font">
                Track your child’s immunization schedule with ease, get email
                reminders before the date.
              </p>
              {user ? (
                <Link to="/temphome">
                  <PrimaryButton
                    class="btn"
                    text="Go to dashboard"
                    type="submit"
                  ></PrimaryButton>
                </Link>
              ) : (
                <Link to="/signup">
                  <PrimaryButton
                    class="btn"
                    text="Get started for free"
                    type="submit"
                  ></PrimaryButton>
                </Link>
              )}
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col mt-4">
                  <img className="img-fluid mt-3" src={child} alt="" />
                </div>
                <div className="col mt-5">
                  <img className="img-fluid mt-5" src={injection} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-sm-5">
              <img className="img-fluid mt-3 bro" src={bro} alt="" />
            </div>

            <div className="col-md-6 mt-sm-5 py-5">
              <h3 className="display-5 h-font-2">
                Add your spouse to help keep track of immunization schedules
              </h3>
              <p className="fw-light sub-h-font">
                Remember your child’s Immunization appointments with
                Vaccitracker
              </p>
            </div>
          </div>
        </div>
        <section>
          <div className="album py-5 gilroy-light">
            <div className="container">
              <div className="row">
                <div className="col-md-4 col-sm-12">
                  <img
                    className="img-fluid mt-2 articles"
                    src={articles}
                    alt=""
                  />
                  <div className="mt-3">
                    <h5 className="title">Read Immunization articles</h5>
                    <p className="desc">
                      Read articles on different immunization and know their
                      side effects, so if they do happen you will know what to
                      do and expect.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12">
                  <img
                    className="img-fluid mt-2 reminders"
                    src={reminders}
                    alt=""
                  />
                  <div className="mt-3">
                    <h5 className="title">Set customized reminders</h5>
                    <p className="desc">
                      Set customized reminders, to remind you of different
                      immunization schedules.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12">
                  <img
                    className="img-fluid mt-2 management"
                    src={management}
                    alt=""
                  />
                  <div className="mt-3">
                    <h5 className="title">
                      Keep track of multiples children Immunization Schedules
                    </h5>
                    <p className="desc">
                      Add multiple children to your account and keep track of
                      their immunizations without mixing them up.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
