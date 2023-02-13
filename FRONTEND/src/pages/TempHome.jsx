import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { selectChildren } from "../features/child/childSlice";
import { selectUpcoming } from "../features/child/upcomingSlice";
import { fetchUpcoming } from "../features/child/upcomingSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import vacci1 from "../assets/img/measles.png";
import avatar from "../assets/img/child-pic.png";
import Vaccinations from "../components/Vaccinations";
import Spinner from "../components/Spinner";

const TempHome = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [selectedModal, setSelectedModal] = useState(-1);

  const children = useSelector(selectChildren);
  const immunizations = useSelector(selectUpcoming);
  const displayedChildren = children.slice(0, 2);
  const displayedVaccinations = Vaccinations.slice(0, 2);
  const sortedImmunizations = [...immunizations].sort((a, b) => {
    const dateA = new Date(a.immunization.vaccination_date);
    const dateB = new Date(b.immunization.vaccination_date);
    return dateA - dateB;
  });
  const displayedUpcoming = sortedImmunizations.slice(0, 4);

  const handleShow = (index) => {
    setSelectedModal(index);
    setShow(true);
  };

  const handleClose = () => {
    setSelectedModal(-1);
    setShow(false);
  };

  useEffect(() => {
    dispatch(fetchUpcoming()).then(() => setLoading(false));
  }, [dispatch]);

  if (loading) {
    return <Spinner />
  }

  return (
    <>
      <div className="row gilroy-light wrapper">
        <div className="col-sm-6 col-md-3">
          <Sidebar />
        </div>
        <div className="col-sm-12 col-md-9">
          <div className="row">
            <div className="col-12 col-md-7 justify-content-center">
              <div
                className="mt-5 d-flex justify-content-between"
                style={{ color: "#032F5B;" }}
              >
                <p className="title-head">Upcoming vaccinations</p>
                {immunizations.length > 0 && (
                  <Link to="/upcoming" className="text-decoration-none see-all">
                    See all
                  </Link>
                )}
              </div>
              <div className="row mt-2">
                {immunizations.length === 0 && (
                  <div className="col-md-12">
                    <h3 className="home-place-color">
                      No upcoming Vaccinations
                    </h3>
                  </div>
                )}
                {displayedUpcoming.map((vaccination) => {
                  const date = new Date(
                    vaccination.immunization.vaccination_date
                  );
                  const options = {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  };
                  const formattedDate = new Intl.DateTimeFormat(
                    "en-US",
                    options
                  ).format(date);
                  return (
                    <div
                      key={vaccination.immunization.id}
                      className="col-12 col-sm-6 col-md-6 mt-3"
                    >
                      <div className="card" id="card-deet">
                        <div className="row">
                          <div className="col-3 m-2 my-5">
                            <img
                              className="rounded-circle card-img-left"
                              src={
                                vaccination.avatar_url !== null
                                  ? vaccination.avatar_url
                                  : avatar
                              }
                              style={{ width: "72px" }}
                              alt="avatar1"
                            />
                          </div>
                          <div className="col-8 mt-2">
                            <div className="card-body">
                              <h5 className="card-title fw-bold">
                                {formattedDate}
                              </h5>
                              <p className="card-title fw-bold">
                                {vaccination.ward.first_name +
                                  " " +
                                  vaccination.ward.last_name}
                              </p>
                              <p className="card-text fw-light">
                                {vaccination.immunization.name}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div
                className="mt-5 d-flex justify-content-between"
                style={{ color: "#032F5B" }}
              >
                {children.length > 0 && (
                  <p className="title-head">My Children</p>
                )}
                {children.length > 2 && (
                  <Link to="/children" className="text-decoration-none see-all">
                    See all
                  </Link>
                )}
              </div>
              {children.length === 0 && (
                <div className="col-md-12 home-btn">
                  <Link to="/addChildren" className="text-decoration-none">
                    <h3 className="home-add-btn">
                      Add a child <span>+</span>
                    </h3>
                  </Link>
                </div>
              )}
              {displayedChildren.map((child) => {
                const date = new Date(child.date_of_birth);
                const options = {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                };
                const formattedDate = new Intl.DateTimeFormat(
                  "en-US",
                  options
                ).format(date);
                return (
                  <Link
                    key={child.id}
                    to={`/vaccinations/${child.id}`}
                    className="text-decoration-none text-dark"
                  >
                    <div className="col-md-12 mt-4">
                      <div className="card transi">
                        <div className="row">
                          <div
                            className="col-4 child-card"
                            style={{ background: "#2F659D" }}
                          >
                            <img
                              className="rounded-circle card-img-left m-2 my-5"
                              src={child.avatar_url ? child.avatar_url : avatar}
                              style={{ width: "72px" }}
                              alt="avatar1"
                            />
                          </div>
                          <div className="col-8">
                            <div className="card-body">
                              <h6 className="card-title fw-bold">
                                Name: {child.first_name + " " + child.last_name}
                              </h6>
                              <p className="card-subtitle fs-6 fw-bolder">
                                DOB: {formattedDate}
                              </p>
                              <p className="card-text fw-light">
                                Gender: {child.gender}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="col-12 col-md-11">
              <div className="mt-5 d-flex justify-content-between">
                <p className="title-head">Vaccination wiki</p>
                <Link
                  to="/vaccination-wiki"
                  className="see-all text-decoration-none"
                >
                  See all
                </Link>
              </div>
              <div className="row">
                {displayedVaccinations.map((vaccination) => (
                  <div key={vaccination.id} className="col-md-6 my-3">
                    <div className="card">
                      <div className="wiki-card">
                        <div className="m-2 mt-3">
                          <img
                            className="rounded card-img-left"
                            src={vacci1}
                            alt="avatar1"
                          />
                        </div>
                        <div className="">
                          <div className="card-body">
                            <h5 className="card-title fw-bold">
                              {vaccination.name}
                            </h5>
                            <p className="card-subtitle gilroy-light">
                              {vaccination.home}
                            </p>
                            <button
                              type="button"
                              className="btn see-all card-text fw-bold mt-2"
                              onClick={() => handleShow(vaccination.id)}
                            >
                              Read More
                            </button>
                            {selectedModal === vaccination.id && (
                              <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                  <Modal.Title>{vaccination.name}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                  <p className="card-text gilroy-light">
                                    {vaccination.description}
                                  </p>
                                  <button
                                    className="btn-flat float"
                                    type="button"
                                    onClick={handleClose}
                                  >
                                    Close
                                  </button>
                                </Modal.Body>
                              </Modal>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TempHome;
