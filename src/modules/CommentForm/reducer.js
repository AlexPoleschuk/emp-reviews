import { handleActions } from 'redux-actions';
import {
  addComment,
  addUser,
  clearCommentData,
  clearUser,
} from './actions';

export const newComment = handleActions(
  {
    [addComment]: (_state, action) => action.payload,
    [clearCommentData]: (_state, action) => action.payload,
  },
  {},
);

export const newUser = handleActions(
  {
    [addUser]: (_state, action) => action.payload,
    [clearUser]: () => '',
  },
  '',
);

export const getComment = state => state.newComment;
export const getUser = state => state.newUser;
