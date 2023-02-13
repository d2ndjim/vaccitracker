import axios from "../../config/axios";

const updateReminders = async (data) => {
  const response = await axios.patch('/immunization', {reminder_days: data});
  return response.data;
};

const reminderService = {
  updateReminders,
};

export default reminderService;
