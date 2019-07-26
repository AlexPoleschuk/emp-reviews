import { handleActions } from 'redux-actions';
import openCloseForm from './actions';

export const openForm = handleActions(
  {
    [openCloseForm]: (_state, action) => action.payload,
  },
  false,
);

export const getOpenForm = state => state.openForm;
