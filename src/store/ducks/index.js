import { combineReducers } from 'redux';

import { user } from '~/store/ducks/user';
import { login } from '~/store/ducks/login';
import { meetup } from '~/store/ducks/meetup';

const reducers = combineReducers({
  user,
  login,
  meetup,
});

export default reducers;
