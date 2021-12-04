import * as actionType from '../constant/Constant';
import {
    // update employee
    UpdateEmployeeRequest,
    UpdateEmployeeSuccess,
    updateEmployeeSuccessPayload,
    updateEmployeeFailurePayload,
    UpdateEmployeeFailure,
    AddClear,
    
} from "../types/UpdateEmployee";



//update employee
export const updateEmployeeRequest = (id:object): UpdateEmployeeRequest => ({
    type: actionType.UPDATEEMPLOYEE_REQUEST,
    id,
});

export const updateEmployeeSuccess = (
    payload: updateEmployeeSuccessPayload
): UpdateEmployeeSuccess => ({
    type: actionType.UPDATEEMPLOYEE_SUCCESS,
    payload,
});

export const updateEmployeeFailure = (
    payload: updateEmployeeFailurePayload
): UpdateEmployeeFailure => ({
    type: actionType.UPDATEEMPLOYEE_FAILURE,
    payload,
});

export const addClear = (
    payload: updateEmployeeFailurePayload
): AddClear => ({
    type: actionType.ADDCLEAR,
    payload,
});



