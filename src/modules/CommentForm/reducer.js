import { handleActions } from 'redux-actions';
import { addComment, clearCommentData } from './actions';

export const newComment = handleActions(
  {
    [addComment]: (_state, action) => action.payload,
    [clearCommentData]: (_state, action) => action.payload,
  },
  {},
);

export const getComment = state => state.newComment;
