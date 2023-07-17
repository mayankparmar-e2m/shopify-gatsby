import { accountActionsTypes } from "./accountActionTypes";

const accountReducer = (state, action) => {
  switch (action.type) {
    case accountActionsTypes.FETCH_CUSTOMER_DATA:
      return {
        ...state,
        customer: action.payload
      }
      case accountActionsTypes.CUSTOMER_LOADER:
        return {
          ...state,
          customerLoader: action.payload
        }
    default:
      return state
  }
}
export default accountReducer;