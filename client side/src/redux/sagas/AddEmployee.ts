import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

import { 
  addEmployeeFailure,addEmployeeSuccess,
  
 } from "../actions/AddEmployee";
import * as actionType from '../constant/Constant';
import { AddEmployeeRequest } from "../types/AddEmployee";


// add employee




function* addEmployeeSaga({employee}:AddEmployeeRequest) {

    try {
      const {data} = yield call(()=>{
        return axios.post("http://localhost:5000/addemployee",employee);
      });
      yield put(
        addEmployeeSuccess({
          error:data.error,
          success:data.success
        })
      );
    } catch (e:any) {
      yield put(
        addEmployeeFailure({
          error: e.message,
          success:false
        })
      );
    }
  }
  
  
  export function* AddEmployeeSaga() {
    yield takeLatest(actionType.ADDEMPLOYEE_REQUEST, addEmployeeSaga);
  }
  
  