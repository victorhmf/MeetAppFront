import React, { Component, Fragment } from 'react';

import '~/config/ReactotronConfig';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import FlashMessage from 'react-native-flash-message';
import AsyncStorage from '@react-native-community/async-storage';
import { theme } from './theme';
import { store, persistor } from './store';
import { setNavigator } from './services/navigation';

import createNavigator from '~/routes';

export default class App extends Component {
  state = {
    userChecked: false,
    userLogged: false,
  };

  async componentDidMount() {
    const token = await AsyncStorage.getItem('@Meetapp_token');

    this.setState({ userChecked: true, userLogged: !!token });
  }

  render() {
    const { userChecked, userLogged } = this.state;
    if (!userChecked) return null;

    const Routes = createNavigator(userLogged);

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <Fragment>
              <Routes ref={setNavigator} />
              <FlashMessage position="top" />
            </Fragment>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    );
  }
}
