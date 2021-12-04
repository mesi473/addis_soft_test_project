import * as actionType from '../constant/Constant';

import { 
  DeleteEmployee,deleteEmployeeActions,
} from "../types/DeleteEmployee";

// delete employee

const delteemployeeinitialState: DeleteEmployee = {
    pending: false,
    success: false,
    error: null,
  };
  
  export const deleteEmployee= (state = delteemployeeinitialState, action: deleteEmployeeActions) => {
    switch (action.type) {
      case actionType.DELETEEMPLOYEE_REQUEST:
        return {
          ...state,
          pending: true,
          success:false,
          error:[]
        };
      case actionType.DELETEEMPLOYEE_SUCCESS:
        return {
          ...state,
          pending: false,
          success: action.payload.success,
          error: action.payload.error,
        };
      case actionType.DELETEEMPLOYEE_FAILURE:
        return {
          ...state,
          pending: false,
          success: false,
          error: action.payload.error,
        };
      default:
        return {
          ...state,
        };
    }
  };
  