import React from 'react';

import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';

import { Container } from './styles';

const ProfileButton = props => (
  <Container>
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate('Profile');
      }}
    >
      <Icon name="user" size={22} color="white" />
    </TouchableOpacity>
  </Container>
);

export default withNavigation(ProfileButton);
