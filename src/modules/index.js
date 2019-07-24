import { combineReducers } from 'redux';
import { fork } from 'redux-saga/effects';
import employees, { sagas as empSaga } from './Main';

export default combineReducers({
  employees,
});

export function* rootSaga() {
  yield fork(empSaga);
}
