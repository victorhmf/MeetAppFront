/* eslint-disable react-native/no-raw-text */
import React, { Component } from 'react';

import { ScrollView, FlatList } from 'react-native';

import MeetupItem from '~/components/MeetupItem';

import Icon from 'react-native-vector-icons/FontAwesome';

import { Container, Label } from './styles';

export default class Dashboard extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="home" size={24} color={tintColor} />,
  };

  state = {
    meetups: [
      {
        id: 1,
        title: 'Meetup React Native dasdasdsa d ',
        members: 3,
        image: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
      },
      {
        id: 2,
        title: 'Meetup TESTE',
        members: 5,
        image: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
      },
      {
        id: 3,
        title: 'Meetup Flex Box',
        members: 6,
        image: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
      },
    ],
  };

  renderListItem = ({ item }) => <MeetupItem item={item} />;

  render() {
    const { meetups } = this.state;
    return (
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Label withMargin>Inscrições</Label>
          <FlatList
            horizontal
            data={meetups}
            keyExtractor={item => String(item.id)}
            renderItem={this.renderListItem}
          />
          <Label withMargin>Próximos meetups</Label>
          <FlatList
            horizontal
            data={meetups}
            keyExtractor={item => String(item.id)}
            renderItem={this.renderListItem}
          />
          <Label withMargin>Recomendados</Label>
          <FlatList
            horizontal
            data={meetups}
            keyExtractor={item => String(item.id)}
            renderItem={this.renderListItem}
          />
        </ScrollView>
      </Container>
    );
  }
}
