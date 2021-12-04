import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

import { updateEmployeeSuccess, updateEmployeeFailure
   } from "../actions/UpdateEmployee";
   import * as actionType from '../constant/Constant';
  import { UpdateEmployeeRequest } from "../types/UpdateEmployee";

//update employee

function* updateEmployeeSaga({id}:UpdateEmployeeRequest) {

    try {
      const {data} = yield call(()=>{
        return axios.put(`http://localhost:5000/updateemployee`,id);
      });
      yield put(
        updateEmployeeSuccess({
          error:data.error,
          success:data.success
        })
      );
    } catch (e:any) {
      yield put(
        updateEmployeeFailure({
          error: e.message,
          success:false
        })
      );
    }
  }
  
  
  export function* UpdateEmployeeSaga() {
    yield takeLatest(actionType.UPDATEEMPLOYEE_REQUEST, updateEmployeeSaga);
  }
  
  