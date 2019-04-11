import { all, takeLatest } from 'redux-saga/effects';
import { UserTypes } from '~/store/ducks/user';
import { createUser } from '~/store/sagas/user';

export default function* rootSaga() {
  yield all([takeLatest(UserTypes.CREATE_USER_REQUEST, createUser)]);
}
