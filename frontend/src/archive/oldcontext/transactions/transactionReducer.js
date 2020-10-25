import { GET_ALL, ADD_TRANSACTION, DELETE_TRANSACTION, TRANSACTION_ERROR, SET_CURRENT, UPDATE_TRANSACTION, CLEAR_CURRENT } from '../../axios/types/types'

export default (state, action) => {
  switch (action.type) {
    case GET_ALL:
      const { id, ...rest} = action.payload
      return {
        ...state,
        transactions: action.payload,
        loading: false
      };
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
        loading: false
      };
    case UPDATE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.map(transaction => transaction.id === action.payload.id ? action.payload : transaction),
        loading: false
      };
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload),
        loading: false
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case TRANSACTION_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}