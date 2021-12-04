import {
    // delete employee
    DELETEEMPLOYEE_FAILURE,
    DELETEEMPLOYEE_REQUEST,
    DELETEEMPLOYEE_SUCCESS,

  } from "../constant/Constant";


// delete employee type
export interface DeleteEmployee{
    pending: boolean;
    success: boolean;
    error: any;
  }
  
  export interface deleteEmployeeSuccessPayload {
    error: String[];
    success:boolean
  }
  
  export interface deleteEmployeeFailurePayload {
    error: String[];
    success:boolean
  }
  
  export interface DeleteEmployeeRequest {
    type: typeof DELETEEMPLOYEE_REQUEST;
    id:string
  }
  
  export type DeleteEmployeeSuccess = {
    type: typeof   DELETEEMPLOYEE_SUCCESS;
    payload: deleteEmployeeSuccessPayload;
  };
  
  export type DeleteEmployeeFailure = {
    type: typeof DELETEEMPLOYEE_FAILURE;
    payload: deleteEmployeeFailurePayload;
  };
  
  export type deleteEmployeeActions =
    | DeleteEmployeeRequest
    | DeleteEmployeeSuccess
    | DeleteEmployeeFailure;