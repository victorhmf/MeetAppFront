import React, { Component } from 'react';

import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { Container } from './styles';

export default class Dashboard extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="home" size={24} color={tintColor} />,
  };

  state = {};

  render() {
    return (
      <Container>
        <Text>Dashboard</Text>
      </Container>
    );
  }
}
