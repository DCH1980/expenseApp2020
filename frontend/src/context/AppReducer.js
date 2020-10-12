import { GET_ALL, ADD_TRANSACTION, DELETE_TRANSACTION } from "../axios/types/types";

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL:
      return {
        ...state,
        data: action.payload,
      };
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
}

export default dataFetchReducer