import * as actionType from '../constant/Constant';

import { 
  UpdateEmployee,updateEmployeeActions
} from "../types/UpdateEmployee";


// update employee
const updateemployeeinitialState: UpdateEmployee = {
    pending: false,
    success: false,
    error: null,
  };
  
  export const updateEmployee= (state = updateemployeeinitialState, action: updateEmployeeActions) => {
    switch (action.type) {
      case actionType.UPDATEEMPLOYEE_REQUEST:
        return {
          ...state,
          pending: true,
          success:false,
          error:[]
        };
      case actionType.UPDATEEMPLOYEE_SUCCESS:
        return {
          ...state,
          pending: false,
          success: action.payload.success,
          error: action.payload.error,
        };
      case actionType.UPDATEEMPLOYEE_FAILURE:
        return {
          ...state,
          pending: false,
          success: false,
          error: action.payload.error,
        };
        case actionType.ADDCLEAR:
          return {
            ...state,
            pending: true,
            success:false,
            error:[]
          };
      default:
        return {
          ...state,
        };
    }
  };