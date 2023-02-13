import axios from "./axios";

const updateProfile = async (data) => axios.patch("/user/update", data);

export default updateProfile;