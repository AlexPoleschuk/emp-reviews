import { fork } from 'redux-saga/effects';
import employees, { sagas as empSaga } from './Main';

export default employees;

export function* rootSaga() {
  yield fork(empSaga);
}
