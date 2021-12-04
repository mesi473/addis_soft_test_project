import * as actionType from '../constant/Constant';
import {
    // get employee
    FetchEmployeeRequest,
    FetchEmployeeSuccess,
    FetchEmployeeSuccessPayload,
    FetchEmployeeFailure,
    FetchEmployeeFailurePayload,

} from "../types/GetEmployee";


// fetchemployee

export const fetchEmployeeRequest = (): FetchEmployeeRequest => ({
    type: actionType.GETEMPLOYEE_REQUEST,
});

export const fetchEmployeeSuccess = (
    payload: FetchEmployeeSuccessPayload
): FetchEmployeeSuccess => ({
    type: actionType.GETEMPLOYEE_SUCCESS,
    payload,
});

export const fetchEmployeeFailure = (
    payload: FetchEmployeeFailurePayload
): FetchEmployeeFailure => ({
    type: actionType.GETEMPLOYEE_FAILURE,
    payload,
});
