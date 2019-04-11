import { combineReducers } from 'redux';

import { user } from '~/store/ducks/user';

const reducers = combineReducers({
  user,
});

export default reducers;
