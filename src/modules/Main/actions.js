import { createAction } from 'redux-actions';

export const getEmployeesList = createAction('GET_EMPLOYEES_LIST');
export const getEmpListSuccess = createAction('GET_EMP_LIST_SUCCESS');
export const getEmpListFailture = createAction('GET_EMP_LIST_FAILTURE');

export const getSelectedEmployee = createAction('GET_SELECTED_EMPLOYEE');
