import axios from "axios";


const register = async (userData) => {
  const response = await axios.post(
    "https://vaccitracker.herokuapp.com/signup",
    userData
  );

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(
    "https://vaccitracker.herokuapp.com/login",
    userData
  );

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
