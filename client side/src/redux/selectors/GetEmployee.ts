import { createSelector } from "reselect";

import { AppState } from "../rootReducer";


// get employee
const getPending = (state: AppState) => state.employee.pending;

const getEmployee = (state: AppState) => state.employee.employee;

const getError = (state: AppState) => state.employee.error;


export const getEmployeeSelector = createSelector(getEmployee, (todos) => todos);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);