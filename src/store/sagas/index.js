import { all, takeLatest } from 'redux-saga/effects';
import { createUser, updateUser } from '~/store/sagas/user';
import { login } from '~/store/sagas/login';
import { createMeetup } from '~/store/sagas/meetup';
import { UserTypes } from '~/store/ducks/user';
import { LoginTypes } from '~/store/ducks/login';
import { MeetupTypes } from '~/store/ducks/meetup'

export default function* rootSaga() {
  yield all([
    takeLatest(UserTypes.CREATE_USER_REQUEST, createUser),
    takeLatest(UserTypes.UPDATE_USER_REQUEST, updateUser),
    takeLatest(LoginTypes.LOGIN_REQUEST, login),
    takeLatest(LoginTypes.LOGIN_REQUEST, login),
    takeLatest(MeetupTypes.CREATE_MEETUP_REQUEST, createMeetup),
  ]);
}
