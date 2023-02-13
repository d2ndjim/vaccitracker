import React, { useEffect } from "react";

import Sidebar from "../components/Sidebar";
import avatar from "../assets/img/child-pic.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectChildren, fetchChildren } from "../features/child/childSlice";
// import { fetchChildren } from "./features/child/childSlice";
import { Plus, Edit2 } from "react-feather";

const Children = () => {
  const dispatch = useDispatch();
  const children = useSelector(selectChildren);

  useEffect(() => {
    dispatch(fetchChildren());
  }, [dispatch]);

  return (
    <>
      <div className="row gilroy-light wrapper">
        <div className="col- col-sm-6 col-md-3">
          <Sidebar />
        </div>
        <div className="col-12 col-md-8">
          <div
            className="mt-5 d-flex justify-content-between"
            style={{ color: "#032F5B" }}
          >
            <p className="title-head">My Children</p>
          </div>
          <div className="row">
            {children.map((child) => {
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
                  to={`/vaccinations/${child.id}`}
                  key={child.id}
                  className="text-decoration-none text-dark col-sm- col-md-6 mt-4"
                >
                  <div key={child.id}>
                    <div className="card transi ">
                      <div className="row">
                        <div
                          className="col-3 child-card"
                          style={{ background: "#2F659D" }}
                        >
                          <img
                            className="rounded-circle card-img-left mr-2 my-5"
                            src={child.avatar_url ? child.avatar_url : avatar}
                            style={{ width: "72px" }}
                            alt="avatar1"
                          />
                        </div>
                        <div className="col-8">
                          <div className="card-body">
                            <span className=" card-title name-font">
                              {child.first_name} {child.last_name}
                            </span>

                            <p className="card-subtitle fs-6 fw-bold mt-2">
                              DOB: {formattedDate}
                            </p>
                            <p className="card-subtitle fs-6 fw-bold mt-2">
                              Gender: {child.gender}
                            </p>
                            {/* <div className="mt-2">
                            <table className="table table-borderless">
                              <thead>
                                <tr>
                                  <th className="text-center" scope="col">
                                    Given
                                  </th>
                                  <th className="text-center" scope="col">
                                    Due
                                  </th>
                                  <th className="text-center" scope="col">
                                    Upcoming
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="text-center">0</td>
                                  <td className="text-center">20</td>
                                  <td className="text-center">0</td>
                                </tr>
                              </tbody>
                            </table>
                          </div> */}
                          </div>
                        </div>
                        <div className="col-1">
                          <div className="d-flex justify-content-end mt-2">
                            <Link to={`/editChild/${child.id}`}>
                              <button className="btn text-white">
                                <Edit2
                                  style={{
                                    color: "rgba(0, 0, 0, 0.54)",
                                    fill: "rgba(0, 0, 0, 0.54)",
                                  }}
                                />
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="d-flex flex-row-reverse">
            <Link to="/addChildren">
              <button className="btn add-btn my-4 text-white">
                <Plus />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Children;
