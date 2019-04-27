import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';
/*
  Actions Types and Creators
*/

export const { Types, Creators } = createActions({
  createMeetupRequest: ['file', 'meetup'],
  createMeetupSuccess: ['meetup'],
  createMeetupFailure: ['error'],
  getMeetupsRequest: [null],
  getMeetupsSuccess: ['meetups'],
  getMeetupsFailure: ['error'],
  showMeetupRequest: ['id'],
  showMeetupSuccess: ['meetup'],
  showMeetupFailure: ['error'],
  subscribeMeetupRequest: ['id'],
  subscribeMeetupSuccess: [null],
  subscribeMeetupFailure: ['error'],
  searchMeetupRequest: ['title'],
  searchMeetupSuccess: ['meetups'],
  searchMeetupFailure: ['error'],
  searchMeetupReset: ['null'],
});

export const MeetupTypes = Types;
export const MeetupActions = Creators;

/*
  INITIAL STATE
*/

const INITIAL_STATE = Immutable({
  newMeetup: { meetup: null, error: null, loading: false },
  meetupList: { meetups: null, error: null, loading: false },
  activeMeetup: { meetup: null, error: null, loading: false },
  subscribedMeetup: { error: null, loading: false },
  searchedMeetup: { meetups: null, error: null, loading: false },
});

/*
  Reducer
*/

const createMeetupRequest = state => state.merge({ newMeetup: { loading: true } });
const createMeetupSuccess = (state, { meetup }) => state.merge({ newMeetup: { meetup, loading: false, error: null } });
const createMeetupFailure = (state, { error }) => state.merge({ newMeetup: { error, loading: false } });

const getMeetupsRequest = state => state.merge({ meetupList: { loading: true } });
const getMeetupsSuccess = (state, { meetups }) => state.merge({ meetupList: { meetups, loading: false, error: null } });
const getMeetupsFailure = (state, { error }) => state.merge({ meetupList: { error, loading: false } });

const showMeetupRequest = state => state.merge({
  activeMeetup: { loading: true },
  subscribedMeetup: { error: null, loading: false },
});
const showMeetupSuccess = (state, { meetup }) => state.merge({ activeMeetup: { meetup, loading: false, error: null } });
const showMeetupFailure = (state, { error }) => state.merge({ activeMeetup: { error, loading: false } });

const subscribeMeetupRequest = state => state.merge({ subscribedMeetup: { loading: true } });
const subscribeMeetupSuccess = state => state.merge({ subscribedMeetup: { loading: false, error: null } });
const subscribeMeetupFailure = (state, { error }) => state.merge({ subscribedMeetup: { error, loading: false } });

const searchMeetupRequest = state => state.merge({ searchedMeetup: { loading: true } });
const searchMeetupSuccess = (state, { meetups }) => state.merge({ searchedMeetup: { meetups, loading: false, error: null } });
const searchMeetupFailure = (state, { error }) => state.merge({ searchedMeetup: { error, loading: false } });
const searchMeetupReset = (state) => state.merge({ searchedMeetup: { meetups: null, error: null, loading: false } });

export const meetup = createReducer(INITIAL_STATE, {
  [Types.CREATE_MEETUP_REQUEST]: createMeetupRequest,
  [Types.CREATE_MEETUP_SUCCESS]: createMeetupSuccess,
  [Types.CREATE_MEETUP_FAILURE]: createMeetupFailure,
  [Types.GET_MEETUPS_REQUEST]: getMeetupsRequest,
  [Types.GET_MEETUPS_SUCCESS]: getMeetupsSuccess,
  [Types.GET_MEETUPS_FAILURE]: getMeetupsFailure,
  [Types.SHOW_MEETUP_REQUEST]: showMeetupRequest,
  [Types.SHOW_MEETUP_SUCCESS]: showMeetupSuccess,
  [Types.SHOW_MEETUP_FAILURE]: showMeetupFailure,
  [Types.SUBSCRIBE_MEETUP_REQUEST]: subscribeMeetupRequest,
  [Types.SUBSCRIBE_MEETUP_SUCCESS]: subscribeMeetupSuccess,
  [Types.SUBSCRIBE_MEETUP_FAILURE]: subscribeMeetupFailure,
  [Types.SEARCH_MEETUP_REQUEST]: searchMeetupRequest,
  [Types.SEARCH_MEETUP_SUCCESS]: searchMeetupSuccess,
  [Types.SEARCH_MEETUP_FAILURE]: searchMeetupFailure,
  [Types.SEARCH_MEETUP_RESET]: searchMeetupReset,
});
