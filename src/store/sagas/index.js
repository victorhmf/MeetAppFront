import { all, takeLatest } from 'redux-saga/effects';
import { UserTypes } from '~/store/ducks/user';
import { createUser } from '~/store/sagas/user';
import { LoginTypes } from '~/store/ducks/login';
import { login } from '~/store/sagas/login';

export default function* rootSaga() {
  yield all([
    takeLatest(UserTypes.CREATE_USER_REQUEST, createUser),
    takeLatest(LoginTypes.LOGIN_REQUEST, login),
  ]);
}
