import React from 'react';

import '~/config/ReactotronConfig';

import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import store from './store';
import FlashMessage from 'react-native-flash-message';
import { setNavigator } from './services/navigation'

import Routes from '~/routes';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Routes ref={setNavigator}/>
    </ThemeProvider>
    <FlashMessage position="top" />
  </Provider>
);

export default App;
