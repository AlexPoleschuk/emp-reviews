import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  getEmployeesList,
  getEmpListSuccess,
  getEmpListFailture,
  getSelectedEmployee,
} from './actions';

const employees = handleActions(
  {
    [getEmployeesList]: () => [],
    [getEmpListSuccess]: (_state, action) => action.payload,
    [getEmpListFailture]: () => [],
  },
  [],
);

const selectedEmp = handleActions(
  {
    [getSelectedEmployee]: (_state, action) => action.payload,
  },
  '',
);

export default combineReducers({ employees, selectedEmp });
export const getEmployees = state => state.employees;
export const getSelectedEmp = state => state.selectedEmp;
