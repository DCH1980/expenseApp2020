import axios from "axios";
import { ADD_TRANSACTION, GET_ALL } from "../axios/types/types";

export const getEverything = () => (dispatch) => {
  axios.get("/api/expense").then((response) => {
    dispatch({
      type: GET_ALL,
      payload: response.data,
    });
  });
};

//Add Transaction
export const addTransaction = (transaction) => (dispatch) => {
  axios.post('api/expense/', transaction).then((response) => {
    dispatch({
      type: ADD_TRANSACTION,
      payload: response.data,
    })
  })
    .catch((err) => console.log(err));
}

const create = (data) => {
  return axios.post("/api/expense/", data);
};

const deleteItem = (id) => {
  return axios.delete(`/api/expense/${id}`, id);
};

export default { getEverything, create, deleteItem };

