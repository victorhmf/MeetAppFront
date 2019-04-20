import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/*
  Action Types and Creators
*/

const { Types, Creators } = createActions({
  createUserRequest: ['data'],
  createUserSuccess: ['user'],
  createUserFailure: ['errors'],
  updateUserRequest: ['data'],
  updateUserSuccess: ['user'],
  updateUserFailure: ['errors'],
});

export const UserTypes = Types;
export const UserActions = Creators;

/*
  Initial state
*/

const INITIAL_STATE = Immutable({
  user: [],
  loading: false,
  errors: [],
});

/*
  Reducer
*/

const userRequest = state => state.merge({ loading: true });
const userSuccess = (state, { user }) => state.merge({ loading: false, user });
const userFailure = (state, { errors }) => state.merge({ loading: false, errors });

export const user = createReducer(INITIAL_STATE, {
  [Types.CREATE_USER_REQUEST]: userRequest,
  [Types.UPDATE_USER_REQUEST]: userRequest,
  [Types.CREATE_USER_SUCCESS]: userSuccess,
  [Types.UPDATE_USER_SUCCESS]: userSuccess,
  [Types.CREATE_USER_FAILURE]: userFailure,
  [Types.UPDATE_USER_FAILURE]: userFailure,
});
