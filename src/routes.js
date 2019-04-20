import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import Signin from '~/pages/Signin';
import Signup from '~/pages/Signup';
import Preferences from '~/pages/Preferences';
import DashBoard from '~/pages/Dashboard';
import Meetup from '~/pages/Meetup';
import NewMeetup from '~/pages/NewMeetup';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';

const AuthNavigator = createSwitchNavigator({ Signin, Signup });

const TabNavigator = createBottomTabNavigator(
  {
    NewMeetup,
    DashBoard,
    Search,
  },
  {
    initialRouteName: 'DashBoard',
  },
);

const AppNavigator = createStackNavigator(
  {
    Preferences,
    TabNavigator,
    Profile,
    Meetup,
  },
  {
    initialRouteName: 'TabNavigator',
  },
);

const Routes = (userLogged = false) => createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthNavigator,
      App: AppNavigator,
    },
    {
      initialRouteName: userLogged ? 'App' : 'Auth',
    },
  ),
);

export default Routes;
