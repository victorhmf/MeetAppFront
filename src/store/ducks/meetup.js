import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/*
  Actions Types and Creators
*/

export const { Types, Creators } = createActions({
  createMeetupRequest: ['file', 'meetup'],
  getMeetupsRequest: [null],
  meetupSuccess: ['data'],
  meetupFailure: ['errors'],
});

export const MeetupTypes = Types;
export const MeetupActions = Creators;

/*
  INITIAL STATE
*/

const INITIAL_STATE = Immutable({
  data: null,
  loading: false,
  errors: null,
});

/*
  Reducer
*/

const meetupRequest = state => state.merge({ loading: true });
const meetupSuccess = (state, { data }) => state.merge({ data, loading: false, errors: [] });
const meetupFailure = (state, { errors }) => state.merge({ errors, loading: false });

export const meetup = createReducer(INITIAL_STATE, {
  [Types.CREATE_MEETUP_REQUEST]: meetupRequest,
  [Types.GET_MEETUPS_REQUEST]: meetupRequest,
  [Types.MEETUP_SUCCESS]: meetupSuccess,
  [Types.MEETUP_FAILURE]: meetupFailure,
});
