import { combineReducers } from 'redux';

import { user } from '~/store/ducks/user';
import { login } from '~/store/ducks/login';

const reducers = combineReducers({
  user,
  login,
});

export default reducers;
