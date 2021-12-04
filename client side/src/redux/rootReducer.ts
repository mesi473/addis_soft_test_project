import { combineReducers } from "redux";

import {
getEmployee
}
  from "./reducers/GetEmployee";
import { addEmployee }
  from "./reducers/AddEmployee";
import { deleteEmployee }
  from "./reducers/DeleteEmployee";
import {
updateEmployee
}
  from "./reducers/UpdateEmployee";

const rootReducer = combineReducers({
  employee: getEmployee,
  addemployee: addEmployee,
  deleteemployee: deleteEmployee,
  updateemployee: updateEmployee
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;