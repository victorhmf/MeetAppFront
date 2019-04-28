import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/*
  Actions Types and Creators
*/

const { Types, Creators } = createActions({
  loginRequest: ['data'],
  loginSuccess: ['user'],
  loginFailure: ['errors'],
  loginReset: [null],
  updateUserSuccess: ['user'],
});

export const LoginTypes = Types;
export const LoginActions = Creators;

/*
  Inital State
*/

const INITIAL_STATE = Immutable({
  user: null,
  loading: false,
  errors: [],
});

/*
  Reducer
*/

export const login = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: state => state.merge({ loading: true }),
  [Types.LOGIN_SUCCESS]: (state, { user }) => state.merge({ user, loading: false, errors: [] }),
  [Types.LOGIN_FAILURE]: (state, { errors }) => state.merge({ errors, loading: false }),
  [Types.LOGIN_RESET]: state => state.merge({ user: null, errors: [], loading: false }),
  [Types.UPDATE_USER_SUCCESS]: (state, { user }) => state.merge({ user }),
});
