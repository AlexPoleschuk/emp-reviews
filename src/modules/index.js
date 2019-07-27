import { combineReducers } from 'redux';
import { fork } from 'redux-saga/effects';
import {
  employees,
  selectedEmp,
  sagas as empSaga,
} from './Main';
import { openForm } from './EmployeePage';
import { newComment, newUser } from './CommentForm';

export default combineReducers({
  employees,
  selectedEmp,
  openForm,
  newComment,
  newUser,
});

export function* rootSaga() {
  yield fork(empSaga);
}
