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
import { theme } from '~/theme';
import ProfileButton from '~/components/ProfileButton';
import React from 'react';

const AuthNavigator = createSwitchNavigator({ Signin, Signup });

const TabNavigator = createBottomTabNavigator(
  {
    NewMeetup,
    DashBoard,
    Search,
  },
  {
    initialRouteName: 'DashBoard',
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      activeTintColor: theme.colors.white,
      inactiveTintColor: theme.colors.white,
      style: {
        backgroundColor: theme.colors.primary,
      },
    },
  },
);

const headerOptions = title => ({
  title,
  headerTintColor: theme.colors.white,
  headerStyle: { backgroundColor: theme.colors.primary },
  headerTitleStyle: { fontSize: 18 },
  headerRight: <ProfileButton />,
});

const AppNavigator = createStackNavigator(
  {
    Preferences,
    Tabs: {
      screen: TabNavigator,
      navigationOptions: ({ navigation }) => {
        const { routeName } = navigation.state.routes[navigation.state.index]; // This gives current route
        switch (routeName) {
          case 'DashBoard':
            return headerOptions('Início');
          case 'NewMeetup':
            return headerOptions('Novo Meetup');
          case 'Search':
            return headerOptions('Busca');
          default:
            break;
        }
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: headerOptions('Perfil'),
    },
    Meetup: {
      screen: Meetup,
      navigationOptions: headerOptions('Meetup'),
    },
  },
  {
    initialRouteName: 'Tabs',
    headerLayoutPreset: 'center',
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
