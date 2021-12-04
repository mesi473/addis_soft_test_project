import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

import { 
  fetchEmployeeFailure, fetchEmployeeSuccess,
 } from "../actions/GetEmployee";
 import * as actionType from '../constant/Constant';
import { Employee} from "../types/GetEmployee";


const getEmployee = () =>
  axios.get<Employee[]>("http://localhost:5000/getemployee");

/*
  Worker Saga: Fired on FETCH_TODO_REQUEST action
*/
function* fetchEmployeeSaga() {
  try {
    const {data} = yield call(getEmployee);
    yield put(
      fetchEmployeeSuccess({
        employee: data.employee,
        success:data.success
      })
    );
  } catch (e:any) {
    yield put(
      fetchEmployeeFailure({
        error: e.message,
        success:false
      })
    );
  }
}


export function* EmployeeSaga() {
  yield takeLatest(actionType.GETEMPLOYEE_REQUEST, fetchEmployeeSaga);
}
