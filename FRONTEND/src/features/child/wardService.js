import axios from "../../config/axios";

const addChild = async (childData) => {
  const response = await axios.post("/ward", childData);
  return response.data;
};

const updateChild = async (childData) => {
  const response = await axios.patch("/ward", childData);
  return response.data;
};

const wardService = {
  addChild,
  updateChild,
};

export default wardService;
