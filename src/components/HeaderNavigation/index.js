import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';

import AsyncStorage from '@react-native-community/async-storage';
import { Container, Button } from './styles';

const HeaderNavigation = ({ navigation }) => {
  const handleSignOut = () => {
    AsyncStorage.clear();
    navigation.navigate('Auth');
  };

  return (
    <Container>
      <Button
        onPress={() => {
          navigation.navigate('Profile');
        }}
      >
        <Icon name="user" size={20} color="white" />
      </Button>
      <Button onPress={handleSignOut}>
        <Icon name="sign-out" size={20} color="white" />
      </Button>
    </Container>
  );
};

export default withNavigation(HeaderNavigation);
