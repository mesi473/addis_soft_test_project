import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

import { 
  deleteEmployeeFailure,deleteEmployeeSuccess, 
 } from "../actions/DeleteEmployee";
 import * as actionType from '../constant/Constant';
import {  DeleteEmployeeRequest} from "../types/DeleteEmployee";

// delete employee




function* deleteEmployeeSaga({id}:DeleteEmployeeRequest) {

    try {
      const {data} = yield call(()=>{
        return axios.delete(`http://localhost:5000/deleteemployee/${id}`);
      });
      yield put(
        deleteEmployeeSuccess({
          error:data.error,
          success:data.success
        })
      );
    } catch (e:any) {
      yield put(
        deleteEmployeeFailure({
          error: e.message,
          success:false
        })
      );
    }
  }
  
  
  
  export function* DeleteEmployeeSaga() {
    yield takeLatest(actionType.DELETEEMPLOYEE_REQUEST, deleteEmployeeSaga);
  }
  