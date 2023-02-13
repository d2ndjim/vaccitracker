/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
// import LoginButton from "../components/LoginButton";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import PrimaryButton from "../components/PrimaryButton";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/temphome");
      window.location.reload();
      Toast.fire({
        icon: "success",
        title: "Signed in successfully",
      });
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch, Toast]);

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Navbar />
      <section className="">
        <div className="container gilroy-light">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card my-5">
                <div className="card-body p-5">
                  <form onSubmit={onSubmit}>
                    <div className="form-outline mb-3">
                      <label className="form-label" htmlFor="email">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        className="form-control form-control-lg"
                      />
                    </div>

                    <div className="form-outline mb-3">
                      <label className="form-label" htmlFor="form3Example4cg">
                        Password
                      </label>
                      <input
                        type="password"
                        id="form3Example4cg"
                        name="password"
                        value={password}
                        onChange={onChange}
                        className="form-control form-control-lg"
                      />
                    </div>

                    <div className="form-outline mb-3">
                      <div className="d-grid col-12">
                        <button
                          className="btn-flat"
                          type="submit"
                        >
                          Login
                        </button>
                      </div>
                    </div>

                    <p className="text-center text-muted mt-3 mb-0">
                      <a
                        href="#!"
                        className="login fw-bold text-decoration-none"
                      >
                        Reset Password?
                      </a>
                    </p>
                    <hr className="hr" />
                    <div className="d-flex justify-content-center mb-1">
                      <Link to="/signup">
                        <PrimaryButton text="Create Account"></PrimaryButton>
                      </Link>
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

export default Login;
