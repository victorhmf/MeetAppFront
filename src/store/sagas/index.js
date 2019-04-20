import { all, takeLatest } from 'redux-saga/effects';
import { UserTypes } from '~/store/ducks/user';
import { createUser, updateUser } from '~/store/sagas/user';
import { LoginTypes } from '~/store/ducks/login';
import { login } from '~/store/sagas/login';

export default function* rootSaga() {
  yield all([
    takeLatest(UserTypes.CREATE_USER_REQUEST, createUser),
    takeLatest(UserTypes.UPDATE_USER_REQUEST, updateUser),
    takeLatest(LoginTypes.LOGIN_REQUEST, login),
  ]);
}
