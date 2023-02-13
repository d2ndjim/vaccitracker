/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateChild, selectWards, reset } from "../features/child/wardSlice";
import { useNavigate, useParams, Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import Swal from "sweetalert2";
import Spinner from "../components/Spinner";

function EditChild() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");

  const { isLoading, isError, isSuccess, message } = useSelector(selectWards);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    Toast.fire({
      icon: "success",
      title: "Image uploaded successfully",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (file) {
      formData.append("ward[avatar]", file);
    }
    formData.append("ward[id]", id);
    formData.append("ward[first_name]", firstName);
    formData.append("ward[last_name]", lastName);
    formData.append("ward[date_of_birth]", dateOfBirth);
    formData.append("ward[gender]", gender);
    formData.append("ward[height]", height);
    formData.append("ward[weight]", weight);
    dispatch(updateChild(formData));
  };

  useEffect(() => {
    if (isError) {
      Swal.fire("Error!", message, "error");
    }

    if (isSuccess) {
      navigate("/children");
      window.location.reload();
      Swal.fire("Confirmed!", "Child Updated!", "success");
    }

    dispatch(reset());
  }, [isError, isSuccess, message, dispatch, navigate]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Link to="/children" className="text-decoration-none flex see-all">
        <BackButton />
      </Link>
      <section className="wrapper">
        <div className="container gilroy-light">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card my-5">
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-4">
                    Edit Child
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <div>
                      <div className="mb-4 d-flex justify-content-center">
                        <img
                          src="https://mdbootstrap.com/img/Photos/Others/placeholder.jpg"
                          alt="example placeholder"
                          style={{ width: "300px" }}
                        />
                      </div>
                      <div className="d-flex justify-content-center">
                        <div className="btn btn-flat btn-rounded">
                          <label
                            className="form-label text-white m-1"
                            htmlFor="customFile1"
                          >
                            Choose file
                          </label>
                          <input
                            type="file"
                            className="form-control d-none"
                            id="customFile1"
                            onChange={handleFileChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-sm-6">
                        <div className="form-outline mb-3">
                          <label className="form-label" htmlFor="first-name">
                            First Name
                          </label>
                          <input
                            type="text"
                            id="first_name"
                            name="first_name"
                            className="form-control form-control-lg"
                            required
                            value={firstName}
                            onChange={(event) =>
                              setFirstName(event.target.value)
                            }
                          />
                        </div>
                      </div>

                      <div className="col-sm-6">
                        <div className="form-outline mb-3">
                          <label className="form-label" htmlFor="last-name">
                            Last Name
                          </label>
                          <input
                            type="text"
                            id="last_name"
                            name="last_name"
                            className="form-control form-control-lg"
                            required
                            value={lastName}
                            onChange={(event) =>
                              setLastName(event.target.value)
                            }
                          />
                        </div>
                      </div>

                      <div className="col-sm-6">
                        <div className="form-outline mb-3">
                          <label className="form-label" htmlFor="first-name">
                            Date of birth
                          </label>
                          <input
                            type="date"
                            id="date_of_birth"
                            name="date_of_birth"
                            className="form-control form-control-lg"
                            required
                            value={dateOfBirth}
                            onChange={(event) =>
                              setDateOfBirth(event.target.value)
                            }
                          />
                        </div>
                      </div>

                      <div className="col-sm-6">
                        <div className="mb-3">
                          <label className="form-label" htmlFor="gender">
                            Gender
                          </label>
                          <div className="form-outline d-grid">
                            <select
                              className="form-select form-select-sm form-select-lg mb-3"
                              aria-label=".form-select-lg example"
                              required
                              value={gender}
                              onChange={(event) =>
                                setGender(event.target.value)
                              }
                            >
                              <option selected>Select Gender</option>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-6">
                        <div className="form-outline mb-3">
                          <label className="form-label" htmlFor="height">
                            Height (cm)
                          </label>
                          <input
                            type="number"
                            id="height"
                            name="height"
                            required
                            className="form-control form-control-lg"
                            value={height}
                            onChange={(event) => setHeight(event.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-sm-6">
                        <div className="form-outline mb-3">
                          <label className="form-label" htmlFor="weight">
                            Weight (Kg)
                          </label>
                          <input
                            type="number"
                            id="weight"
                            name="weight"
                            className="form-control form-control-lg"
                            required
                            value={weight}
                            onChange={(event) => setWeight(event.target.value)}
                          />
                        </div>
                      </div>

                      <div className="form-outline mb-3">
                        <div className="d-grid col-12">
                          <button className="btn-flat" type="submit">
                            Update Child
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EditChild;
