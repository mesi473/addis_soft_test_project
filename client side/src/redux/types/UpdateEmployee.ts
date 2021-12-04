import {
  ADDCLEAR,
    // update employee
    UPDATEEMPLOYEE_FAILURE,
    UPDATEEMPLOYEE_REQUEST,
    UPDATEEMPLOYEE_SUCCESS

  } from "../constant/Constant";


  // UPDATE employee type
export interface UpdateEmployee{
    pending: boolean;
    success: boolean;
    error: any;
  }
  
  export interface updateEmployeeSuccessPayload {
    error: String[];
    success:boolean
  }
  
  export interface updateEmployeeFailurePayload {
    error: String[];
    success:boolean
  }
  
  export interface UpdateEmployeeRequest {
    type: typeof UPDATEEMPLOYEE_REQUEST;
    id:object
  }
  
  export type UpdateEmployeeSuccess = {
    type: typeof   UPDATEEMPLOYEE_SUCCESS;
    payload: updateEmployeeSuccessPayload;
  };
  
  export type UpdateEmployeeFailure = {
    type: typeof UPDATEEMPLOYEE_FAILURE;
    payload: updateEmployeeFailurePayload;
  };
  export type AddClear = {
    type: typeof ADDCLEAR
    payload: updateEmployeeFailurePayload;
  };
  export type updateEmployeeActions =
    | UpdateEmployeeRequest
    | UpdateEmployeeSuccess
    | UpdateEmployeeFailure
    | AddClear;