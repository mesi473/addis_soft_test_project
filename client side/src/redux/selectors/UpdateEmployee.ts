import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

//update selector

const updatePending = (state: AppState) => state.updateemployee.pending;

const update_success = (state: AppState) => state.updateemployee.success;

const updateError = (state: AppState) => state.updateemployee.error;



export const updateEmployeeSelector = createSelector(update_success, (employee) => employee);

export const updagePendingSelector = createSelector(
  updatePending,
  (pending) => pending
);


export const updateErrorSelector = createSelector(updateError , (error) => error);