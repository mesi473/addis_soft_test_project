import * as actionType from '../constant/Constant';

import { 
  AddEmployee,AddEmployeeActions,
} from "../types/AddEmployee";

// add employee

const addemployeeinitialState: AddEmployee = {
    pending: false,
    success: false,
    error: null,
  };
  
  export const addEmployee= (state = addemployeeinitialState, action: AddEmployeeActions) => {
    switch (action.type) {
      case actionType.ADDEMPLOYEE_REQUEST:
        return {
          ...state,
          pending: true,
          success:false,
          error:[]
        };
      case actionType.ADDEMPLOYEE_SUCCESS:
        return {
          ...state,
          pending: false,
          success: action.payload.success,
          error: action.payload.error,
        };
      case actionType.ADDEMPLOYEE_FAILURE:
        return {
          ...state,
          pending: false,
          success:false,
          error: action.payload.error,
        };
      case actionType.ADDCLEAR:
        return {
          ...state,
          pending: false,
          success:false,
          error:[]
        };
      default:
        return {
          ...state,
        };
    }
  };
  
  