
import {
    //add employee
    ADDEMPLOYEE_FAILURE,
    ADDEMPLOYEE_SUCCESS,
    ADDEMPLOYEE_REQUEST,

    ADDCLEAR

  } from "../constant/Constant";


// add employee type
export interface AddEmployee{
    pending: boolean;
    success: boolean;
    error: any;
  }
  
  export interface AddEmployeeSuccessPayload {
    error: String[];
    success:boolean
  }
  
  export interface AddEmployeeFailurePayload {
    error: String[];
    success:boolean
  }
  
  export interface AddEmployeeRequest {
    type: typeof ADDEMPLOYEE_REQUEST;
    employee:object
  }
  
  export type AddEmployeeSuccess = {
    type: typeof   ADDEMPLOYEE_SUCCESS;
    payload: AddEmployeeSuccessPayload;
  };
  
  export type AddEmployeeFailure = {
    type: typeof ADDEMPLOYEE_FAILURE;
    payload: AddEmployeeFailurePayload;
  };
  export type AddClear = {
    type: typeof ADDCLEAR
    payload: AddEmployeeFailurePayload;
  };
  
  export type AddEmployeeActions =
    | AddEmployeeRequest
    | AddEmployeeSuccess
    | AddEmployeeFailure
    | AddClear;