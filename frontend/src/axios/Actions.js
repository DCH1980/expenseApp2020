import axios from "axios";

const create = (data) => {
  return axios.post("/api/expense/", data);
};

export default { create };
