import { handleActions } from 'redux-actions';
import {
  getEmployeesList,
  getEmpListSuccess,
  getEmpListFailture,
  getSelectedEmployee,
} from './actions';

export const employees = handleActions(
  {
    [getEmployeesList]: () => [],
    [getEmpListSuccess]: (_state, action) => action.payload,
    [getEmpListFailture]: () => [],
  },
  [],
);

export const selectedEmp = handleActions(
  {
    [getSelectedEmployee]: (_state, action) => action.payload,
  },
  '',
);

export const getEmployees = state => state.employees;
export const getSelectedEmp = state => state.selectedEmp;
