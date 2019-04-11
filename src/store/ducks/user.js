import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/*
  Action Types and Creators
*/

const { Types, Creators } = createActions({
  createUserRequest: ['user'],
  createUserSuccess: ['data'],
  createUserFailure: ['errors'],
});

export const UserTypes = Types;
export const UserActions = Creators;

/*
  Initial state
*/

const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
  errors: [],
});

/*
  Reducer
*/

export const user = createReducer(INITIAL_STATE, {
  [Types.CREATE_USER_REQUEST]: state => state.merge({ loading: true }),
  [Types.CREATE_USER_SUCCESS]: (state, { data }) => state.merge({ loading: false, data }),
  [Types.CREATE_USER_FAILURE]: (state, { errors }) => state.merge({ loading: false, errors }),
});
