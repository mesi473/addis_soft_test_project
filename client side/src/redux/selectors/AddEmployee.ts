import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

// addemployee
const addPending = (state: AppState) => state.addemployee.pending;

const add_success = (state: AppState) => state.addemployee.success;

const addError = (state: AppState) => state.addemployee.error;



export const addEmployeeSelector = createSelector(add_success, (employee) => employee);

export const addPendingSelector = createSelector(
  addPending,
  (pending) => pending
);
export const addErrorSelector = createSelector(addError , (error) => error);