import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/*
  Actions Types and Creators
*/

export const { Types, Creators } = createActions({
  createMeetupRequest: ['file', 'meetup'],
  createMeetupSuccess: ['newMeetup'],
  getMeetupsRequest: [null],
  getMeetupsSuccess: ['meetups'],
  showMeetupRequest: ['id'],
  showMeetupSuccess: ['activeMeetup'],
  meetupFailure: ['errors'],
});

export const MeetupTypes = Types;
export const MeetupActions = Creators;

/*
  INITIAL STATE
*/

const INITIAL_STATE = Immutable({
  newMeetup: null,
  meetups: null,
  activeMeetup: null,
  loading: false,
  errors: null,
});

/*
  Reducer
*/

const meetupRequest = state => state.merge({ loading: true });
const createMeetupSuccess = (state, { newMeetup }) => state.merge({ newMeetup, loading: false, errors: null });
const getMeetupsSuccess = (state, { meetups }) => state.merge({ meetups, loading: false, errors: null });
const showMeetupSuccess = (state, { activeMeetup }) => state.merge({ activeMeetup, loading: false, errors: null });
const meetupFailure = (state, { errors }) => state.merge({ errors, loading: false });

export const meetup = createReducer(INITIAL_STATE, {
  [Types.CREATE_MEETUP_REQUEST]: meetupRequest,
  [Types.CREATE_MEETUP_SUCCESS]: createMeetupSuccess,
  [Types.GET_MEETUPS_REQUEST]: meetupRequest,
  [Types.GET_MEETUPS_SUCCESS]: getMeetupsSuccess,
  [Types.SHOW_MEETUP_REQUEST]: meetupRequest,
  [Types.SHOW_MEETUP_SUCCESS]: showMeetupSuccess,
  [Types.MEETUP_FAILURE]: meetupFailure,
});
