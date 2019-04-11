import { call, put } from 'redux-saga/effects';

import api from '~/services/api';

import { UserActions } from '~/store/ducks/user';
import { showMessage } from 'react-native-flash-message';
import { navigate } from '~/services/navigation';

export function* createUser({ user }) {
  try {
    const { data } = yield call(api.post, '/users', user);

    yield put(UserActions.createUserSuccess(data));

    showMessage({
      message: 'Usuário criado com sucesso!',
      type: 'success',
      duration: 3000,
    });

    navigate('Signin');
  } catch (error) {
    const { data } = error.response;
    yield put(UserActions.createUserFailure(data));
  }
}
