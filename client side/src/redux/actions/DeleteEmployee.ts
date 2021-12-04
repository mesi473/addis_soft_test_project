import * as actionType from '../constant/Constant';
import {

    // delete employee
    DeleteEmployeeSuccess,
    deleteEmployeeSuccessPayload,
    deleteEmployeeFailurePayload,
    DeleteEmployeeRequest,
    DeleteEmployeeFailure,

    
} from "../types/DeleteEmployee";



//delete employee
export const deleteEmployeeRequest = (id:string): DeleteEmployeeRequest => ({
    type: actionType.DELETEEMPLOYEE_REQUEST,
    id,
});

export const deleteEmployeeSuccess = (
    payload: deleteEmployeeSuccessPayload
): DeleteEmployeeSuccess => ({
    type: actionType.DELETEEMPLOYEE_SUCCESS,
    payload,
});

export const deleteEmployeeFailure = (
    payload: deleteEmployeeFailurePayload
): DeleteEmployeeFailure => ({
    type: actionType.DELETEEMPLOYEE_FAILURE,
    payload,
});
