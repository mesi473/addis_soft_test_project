import * as actionType from '../constant/Constant';
import {
    // add employee
    AddEmployeeRequest,
    AddEmployeeSuccess,
    AddEmployeeSuccessPayload,
    AddEmployeeFailure,
    AddEmployeeFailurePayload,
    AddClear,
    
    
} from "../types/AddEmployee";


//add employee
export const addEmployeeRequest = (employee:object): AddEmployeeRequest => ({
    type: actionType.ADDEMPLOYEE_REQUEST,
    employee,
});


export const addEmployeeSuccess = (
    payload: AddEmployeeSuccessPayload
): AddEmployeeSuccess => ({
    type: actionType.ADDEMPLOYEE_SUCCESS,
    payload,
});

export const addEmployeeFailure = (
    payload: AddEmployeeFailurePayload
): AddEmployeeFailure => ({
    type: actionType.ADDEMPLOYEE_FAILURE,
    payload,
});
export const addClear = (
    payload: AddEmployeeFailurePayload
): AddClear => ({
    type: actionType.ADDCLEAR,
    payload,
});

