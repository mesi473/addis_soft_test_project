import { all, fork } from "redux-saga/effects";

import {UpdateEmployeeSaga} from "./sagas/UpdateEmployee";
import {DeleteEmployeeSaga} from "./sagas/DeleteEmployee";
import {AddEmployeeSaga} from "./sagas/AddEmployee";
import {EmployeeSaga} from "./sagas/GetEmployee";

export function* rootSaga() {
  yield all([
    fork(EmployeeSaga),
    fork(AddEmployeeSaga),
    fork(DeleteEmployeeSaga),
    fork(UpdateEmployeeSaga),
  ]);
}