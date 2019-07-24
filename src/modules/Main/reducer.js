import { handleActions } from 'redux-actions';
import {
  getEmployeesList,
  getEmpListSuccess,
  getEmpListFailture,
} from './actions';

const employees = handleActions(
  {
    [getEmployeesList]: () => [],
    [getEmpListSuccess]: (_state, action) => action.payload,
    [getEmpListFailture]: () => [],
  },
  [],
);

export default employees;

export const getEmployees = state => state.employees;
