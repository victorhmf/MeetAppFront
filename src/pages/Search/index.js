import React, { Component } from 'react';

import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { Container } from './styles';

export default class Search extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="search" size={20} color={tintColor} />,
  };

  state = {};

  render() {
    return (
      <Container>
        <Text>Search</Text>
      </Container>
    );
  }
}
