import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import {
  updateReminders,
  selectReminder,
  reset,
} from "../features/reminder/reminderSlice";
import { selectDays } from "../features/reminder/reminderDaysSlice";
import { Bell } from "react-feather";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Spinner from "../components/Spinner";

const Reminders = () => {
  const dispatch = useDispatch();
  const [reminder, setReminder] = useState(null);

  const day = useSelector(selectDays);

  const { isLoading, isError, isSuccess, message } =
    useSelector(selectReminder);

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

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      setReminder("");
      window.location.reload();
      Toast.fire({
        icon: "success",
        title: "Reminders updated successfully",
      });
    }

    dispatch(reset());
  }, [isError, isSuccess, message, dispatch, Toast]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updateReminders(reminder));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="row gilroy-light wrapper">
        <div className="col-md-3">
          <Sidebar />
        </div>

        <div className="col-xs-12 col-sm-12 col-md-8 my-5 justify-content-center align-items-center">
          <div className="mt-4 d-flex justify-content-center">
            <p className="reminder-head">Set Reminders for all vaccinations</p>
          </div>
          <form onSubmit={onSubmit}>
            <div className="d-flex justify-content-center ">
              <hr className="divider" />
            </div>
            <div className="mb-2 reminder-form d-flex justify-content-center">
              <span className="mx-4">
                <Bell fill="#F76600" className="bell" />
              </span>
              <span>
                <input
                  type="number"
                  min="0"
                  step="1"
                  className="form-control"
                  id="amountInput"
                  placeholder="0"
                  value={reminder}
                  onChange={(e) => setReminder(e.target.value)}
                  style={{
                    backgroundColor: "#E1E1E1",
                  }}
                />
              </span>
              <span>
                <select
                  className="form-select form-control mx-4"
                  aria-label=".form-select-lg example"
                  style={{
                    backgroundColor: "#E1E1E1",
                    borderRadius: "4px",
                    padding: "5px 24px;",
                  }}
                >
                  <option selected>Days</option>
                  <option value="Days">Days</option>
                </select>
              </span>
            </div>
            <div className="d-flex justify-content-center ">
              <hr className="divider" />
            </div>
            <div className="mb-3 d-flex justify-content-center align-items-center">
              <button
                className="btn-flat"
                type="submit"
                style={{
                  padding: "21px, 29px, 21px, 29px",
                  borderRadius: "4px",
                }}
              >
                Set Reminders
              </button>
            </div>
            <div className="d-flex justify-content-center ">
              <p
                className="reminder-announce"
                style={{ backgroundColor: "#FDE0CC" }}
              >
                {`Reminder set for ${day} days before vaccination`}
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Reminders;
