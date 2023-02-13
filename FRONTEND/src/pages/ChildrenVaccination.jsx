import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import avatar from "../assets/img/child-pic.png";
import axios from "../config/axios";
import Swal from "sweetalert2";
import { Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";

const ChildrenVaccination = () => {
  const [selectedChild, setSelectedChild] = useState({});
  const [vaccines, setVaccines] = useState({});
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const handleUpdateVaccine = async (vaccineId, vaccineData) => {
    try {
      await axios.patch(
        `/ward/${id}/vaccine/${vaccineId}`,
        vaccineData
      );
      
      Toast.fire({
        icon: "success",
        title: "Vaccination Status Updated!",
      });
      
      const updatedVaccines = await axios.get(
        `/vaccines?filter=${filter}&ward_id=${id}`
      );
      setVaccines(updatedVaccines.data);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    async function fetchChild() {
      const response = await axios.get(`/ward/${id}`);
      setSelectedChild(response.data);
      setLoading(false);
    }

    async function fetchVaccines() {
      const response = await axios.get(
        `/vaccines?filter=${filter}&ward_id=${id}`
      );
      setVaccines(response.data);
    }
    fetchChild();
    fetchVaccines();
  }, [filter, id]);
  

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <Link to="/children" className="text-decoration-none flex see-all">
        <BackButton />
      </Link>

      <div className="container gilroy-light mb-4">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="d-flex justify-content-center mt-5">
              <img
                className="rounded-circle"
                src={
                  selectedChild.avatar_url ? selectedChild.avatar_url : avatar
                }
                style={{ width: "72px" }}
                alt="avatar"
              />
            </div>
            <div className="d-flex justify-content-center">
              <h2 className="display-6">
                {selectedChild.first_name + " " + selectedChild.last_name}
              </h2>
            </div>
            <div className="d-flex gap-5 child-details justify-content-center">
              <p>Age: {`${selectedChild.age} years`}</p>
              <p>Gender: {selectedChild.gender}</p>
            </div>
            <div className="d-flex justify-content-center">
              <h4 className="text-muted">
                Update vaccination status for {selectedChild.first_name}
              </h4>
            </div>
            <select
              className="form-select form-select-lg custom-select"
              onChange={(e) => {
                setFilter(e.target.value);
              }}
              aria-label=".form-select-lg example"
              style={{ backgroundColor: "#054689" }}
            >
              <option value="All">All</option>
              <option value="Completed">Completed</option>
              <option value="Upcoming">Upcoming</option>
              <option value="Due">Due</option>
            </select>

            <Accordion className="my-3 accordion" id="accordionExample">
              {Object.entries(vaccines).map(
                ([vaccinationDate, vaccinations]) => {
                  const date = new Date(vaccinationDate);
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
                    <Accordion.Item
                      eventKey={vaccinationDate}
                      key={vaccinationDate}
                      className="my-3 custom-accordion"
                    >
                      <Accordion.Header>
                        {formattedDate} ({vaccinations[0].vaccination_type})
                      </Accordion.Header>
                      <Accordion.Body>
                        {vaccines[vaccinationDate].map((vaccine) => (
                          <div
                            key={vaccine.id}
                            className="form-check form-check-reverse d-flex justify-content-between my-2"
                            style={{
                              backgroundColor: vaccine.completed
                                ? "#E8FFE0"
                                : "rgba(253, 224, 204, 0.6)",
                              padding: "12px 57px 12px 24px",
                            }}
                          >
                            <label
                              className="form-check-label vaccine-label"
                              htmlFor={`checkbox${vaccine.id}`}
                            >
                              {vaccine.name}
                            </label>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              checked={vaccine.completed}
                              value=""
                              id={`checkbox${vaccine.id}`}
                              onChange={(e) =>
                                handleUpdateVaccine(vaccine.id, {
                                  completed: e.target.checked,
                                })
                              }
                            />
                          </div>
                        ))}
                      </Accordion.Body>
                    </Accordion.Item>
                  );
                }
              )}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChildrenVaccination;
