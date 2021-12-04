import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

// delete employee

const deletePending = (state: AppState) => state.deleteemployee.pending;

const delete_success = (state: AppState) => state.deleteemployee.success;

const deleteError = (state: AppState) => state.deleteemployee.error;



export const deleteEmployeeSelector = createSelector(delete_success, (employee) => employee);

export const deletePendingSelector = createSelector(
  deletePending,
  (pending) => pending
);


export const deleteErrorSelector = createSelector(deleteError , (error) => error);
