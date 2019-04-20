import { call, put } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';

import api from '~/services/api';

import { LoginActions } from '~/store/ducks/login';
import { navigate } from '~/services/navigation';

export function* login(user) {
  try {
    const { data } = yield call(api.post, '/sessions', user.data);

    yield AsyncStorage.setItem('@Meetapp_token', data.token);
    yield put(LoginActions.loginSuccess(data.user));

    navigate('Preferences');
  } catch (error) {
    if (error.response.status === 401) {
      error.response.data = [
        { message: 'Email ou senha estão incorretos.', status: 401, field: 'email/password' },
      ];
    }
    yield put(LoginActions.loginFailure(error.response.data));
  }
}
