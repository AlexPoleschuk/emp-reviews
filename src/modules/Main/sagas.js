import { takeEvery, put, call } from 'redux-saga/effects';
import {
  getEmployeesList,
  getEmpListSuccess,
  getEmpListFailture,
} from './actions';
import getEmployees from '../../services/mock';

function* getEmployeesHandler() {
  try {
    const response = yield call(getEmployees);
    yield put(getEmpListSuccess(response));
  } catch (error) {
    yield put(getEmpListFailture());
  }
}

export default function* () {
  yield takeEvery(getEmployeesList, getEmployeesHandler);
}
