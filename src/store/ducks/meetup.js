import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/*
  Actions Types and Creators
*/

export const { Types, Creators } = createActions({
  createMeetupRequest: ['file', 'meetup'],
  createMeetupSuccess: ['meetup'],
  createMeetupFailure: ['errors'],
});

export const MeetupTypes = Types;
export const MeetupActions = Creators;

/*
  INITIAL STATE
*/

const INITIAL_STATE = Immutable({
  meetup: null,
  loading: false,
  errors: [],
});

/*
  Reducer
*/

const meetupRequest = state => state.merge({ loading: true });
const meetupSuccess = (state, { meetup }) => state.merge({ meetup, loading: false, errors: [] });
const meetupFailure = (state, { errors }) => state.merge({ errors, loading: false });

export const meetup = createReducer(INITIAL_STATE, {
  [Types.CREATE_MEETUP_REQUEST]: meetupRequest,
  [Types.CREATE_MEETUP_SUCCESS]: meetupSuccess,
  [Types.CREATE_MEETUP_FAILURE]: meetupFailure,
});
