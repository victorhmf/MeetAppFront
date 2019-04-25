import { call, put, select } from 'redux-saga/effects';

import api from '~/services/api';

import { UserActions } from '~/store/ducks/user';
import { showMessage } from 'react-native-flash-message';
import { navigate } from '~/services/navigation';

export function* createUser(user) {
  try {
    const { data } = yield call(api.post, '/users', user.data);

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

export function* updateUser(user) {
  try {
    const { id } = yield select(state => state.login.user);

    const { data } = yield call(api.put, `/users/${id}`, user.data);

    yield put(UserActions.updateUserSuccess(data));

    showMessage({
      message: 'Perfil atualizado com sucesso!',
      type: 'success',
      duration: 3000,
    });

    navigate('Dashboard');
  } catch (error) {
    const { data } = error.response;
    yield put(UserActions.updateUserFailure(data));
  }
}
