import React from "react";
import Sidebar from "../components/Sidebar";
import Vaccinations from "../components/Vaccinations";
import { Modal } from "react-bootstrap";
import { useState } from "react";

const VaccinationWiki = () => {
  const [show, setShow] = useState(false);
  const [selectedModal, setSelectedModal] = useState(-1);

  const handleShow = (index) => {
    setSelectedModal(index);
    setShow(true);
  };

  const handleClose = () => {
    setSelectedModal(-1);
    setShow(false);
  };

  return (
    <>
      <div className="row gilroy-light mb-4 wrapper">
        <div className="col- col-sm-6 col-md-3">
          <Sidebar />
        </div>
        <div className="col-12 col-sm-12 col-md-9">
          <div className="row">
            <div className="col-12 col-sm-11 justify-content-center">
              <div className="mt-5 d-flex justify-content-between">
                <p className="title-head">Vaccination wiki</p>
              </div>
              <div className="row mt-2">
                {Vaccinations.map((vaccination) => (
                  <div key={vaccination.id} className="col-md-6 my-3">
                    <div className="card">
                      <div className="wiki-card">
                        <div className="m-2 mt-3">
                          <img
                            className="rounded card-img-left"
                            src={vaccination.image}
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


export default VaccinationWiki;
