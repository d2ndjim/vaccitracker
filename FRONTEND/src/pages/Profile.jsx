import React, { useState, useEffect } from "react";
import axios from "../config/axios";
import Sidebar from "../components/Sidebar";
import profileImage from "../assets/img/vector-img.png";
import Swal from "sweetalert2";
import Spinner from "../components/Spinner";
import updateProfile from "../config/profile";

const Profile = () => {
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [file, setFile] = useState(null);

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

  useEffect(() => {
    async function fetchProfile() {
      const response = await axios.get("/authorized");
      setForm(response.data);
    }
    fetchProfile();
    setLoading(false);
  }, []);

  const handleChange = (e) => {
    setForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    Toast.fire({
      icon: "success",
      title: "Image uploaded successfully",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      Swal.fire("Error!", "Passwords do not match", "error");
    } else {
      const formData = new FormData();
      if (file) {
        formData.append("user[avatar]", file);
      }
      formData.append("user[first_name]", form.first_name);
      formData.append("user[last_name]", form.last_name);
      formData.append("user[email]", form.email);
      formData.append("user[password]", password);
      const response = await updateProfile(formData);
      if (response.status === 200) {
        window.location.reload();
        Swal.fire("Success!", "Profile updated successfully", "success");
      } else {
        Swal.fire("Error!", "Something went wrong", "error");
      }
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="row gilroy-light">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-8 my-5 justify-content-center align-items-center">
          <div className="my-3 d-flex justify-content-center">
            <img
              className="profile-image"
              src={form.avatar_url ? form.avatar_url : profileImage}
              style={{}}
              alt="profile avatar"
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
          <div className="d-flex justify-content-center mt-2">
            <p className="fs-4">{form.first_name + " " + form.last_name}</p>
          </div>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-8 col-md-8 col-lg-7 col-xl-6">
              <form onSubmit={handleSubmit}>
                <div className="form-outline mb-3">
                  <label className="form-label" htmlFor="first-name">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={form.first_name}
                    onChange={handleChange}
                    className="form-control form-control-lg"
                  />
                </div>

                <div className="form-outline mb-3">
                  <label className="form-label" htmlFor="last-name">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={form.last_name}
                    onChange={handleChange}
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="form-outline mb-3">
                  <label className="form-label" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="form-outline mb-3">
                  <label className="form-label" htmlFor="password2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="form-outline mb-3">
                  <label className="form-label" htmlFor="password2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="password2"
                    name="password2"
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="form-outline mb-3">
                  <div className="d-grid col-12">
                    <button className="btn-flat" type="submit">
                      Update Profile
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
