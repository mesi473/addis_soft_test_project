import {
    //get employee
    GETEMPLOYEE_FAILURE,
    GETEMPLOYEE_REQUEST,
    GETEMPLOYEE_SUCCESS,

  } from "../constant/Constant";


  // get employee type
  
  export interface Employee {
    name: string;
    date_of_birth: string;
    gender: string;
    salary: number;
    _id:string,
    
  }
  


  export interface EmployeeState {
    pending: boolean;
    employee: Employee[];
    error: object | null;
  }
  
  export interface FetchEmployeeSuccessPayload {
    employee: Employee[];
    success:boolean
  }
  
  export interface FetchEmployeeFailurePayload {
    error: object;
    success:boolean
  }
  
  export interface FetchEmployeeRequest {
    type: typeof GETEMPLOYEE_REQUEST;
  }
  
  export type FetchEmployeeSuccess = {
    type: typeof    GETEMPLOYEE_SUCCESS;
    payload: FetchEmployeeSuccessPayload;
  };
  
  export type FetchEmployeeFailure = {
    type: typeof GETEMPLOYEE_FAILURE;
    payload: FetchEmployeeFailurePayload;
  };
  
  export type EmployeeActions =
    | FetchEmployeeRequest
    | FetchEmployeeSuccess
    | FetchEmployeeFailure;
  