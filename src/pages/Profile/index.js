import React, { Component } from 'react';

import { View, Text } from 'react-native';

// import { Container } from './styles';

export default class Profile extends Component {
  static navigationOptions = {
    title: 'Perfil',
  };

  state = {};

  render() {
    return (
      <View>
        <Text>Profile</Text>
      </View>
    );
  }
}
