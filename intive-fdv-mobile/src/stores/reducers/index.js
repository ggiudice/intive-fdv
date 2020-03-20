import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import UsersReducer from './UsersReducer';

import {
  TURN_LOADING,
} from '../actions';

const initialState = {
  loading: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TURN_LOADING: {
      return { ...state, loading: action.payload };
    }
    default:
      return state;
  }
};

const reducers = {
  form: formReducer,
  rootReducer,
  users: UsersReducer
};

const allReducers = combineReducers(reducers);

export default allReducers;
