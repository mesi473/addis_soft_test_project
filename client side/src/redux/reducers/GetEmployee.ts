import * as actionType from '../constant/Constant';

import { 
  EmployeeActions, EmployeeState,
} from "../types/GetEmployee";


//get employee
const initialState: EmployeeState = {
    pending: false,
    employee: [],
    error: null,
  };
  
  export const getEmployee =(state = initialState, action: EmployeeActions) => {
    switch (action.type) {
      case actionType.GETEMPLOYEE_REQUEST:
        return {
          ...state,
          pending: true,
        };
      case actionType.GETEMPLOYEE_SUCCESS:
        return {
          ...state,
          pending: false,
          employee: action.payload.employee,
          error: null,
        };
      case actionType.GETEMPLOYEE_FAILURE:
        return {
          ...state,
          pending: false,
          employee: [],
          error: action.payload.error,
        };
      default:
        return {
          ...state,
        };
    }
  };
  