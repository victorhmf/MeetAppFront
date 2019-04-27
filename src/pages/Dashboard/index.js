/* eslint-disable react-native/no-raw-text */
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MeetupActions } from '~/store/ducks/meetup';

import {
  ScrollView, FlatList, ActivityIndicator, RefreshControl,
} from 'react-native';

import MeetupItem from '~/components/MeetupItem';

import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Container, Label, Message, Error,
} from './styles';

class Dashboard extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="home" size={24} color={tintColor} />,
  };

  componentDidMount() {
    const { getMeetupsRequest } = this.props;
    getMeetupsRequest();
  }

  onRefresh = () => {
    const { getMeetupsRequest } = this.props;
    getMeetupsRequest();
  };

  renderListItem = ({ item }) => <MeetupItem width="290px" item={item} />;

  render() {
    const { meetups, error, loading } = this.props;
    return (
      <Container>
        {error ? (
          <Error>{error.error.message}</Error>
        ) : (
          (meetups && (
            <ScrollView
              showsVerticalScrollIndicator={false}
              refreshControl={<RefreshControl refreshing={loading} onRefresh={this.onRefresh} />}
            >
              <Label withMargin>Inscrições</Label>
              {meetups.subscribed.length ? (
                <FlatList
                  horizontal
                  data={meetups.subscribed}
                  keyExtractor={item => String(item.id)}
                  renderItem={this.renderListItem}
                />
              ) : (
                <Message>Você ainda não se inscreveu em nennhum Meetup</Message>
              )}
              <Label withMargin>Próximos meetups</Label>
              {meetups.notSubscribed.length ? (
                <FlatList
                  horizontal
                  data={meetups.notSubscribed}
                  keyExtractor={item => String(item.id)}
                  renderItem={this.renderListItem}
                />
              ) : (
                <Message>Não há Meetups disponíveis no momento</Message>
              )}
              <Label withMargin>Recomendados</Label>
              {meetups.recommended.length ? (
                <FlatList
                  horizontal
                  data={meetups.recommended}
                  keyExtractor={item => String(item.id)}
                  renderItem={this.renderListItem}
                />
              ) : (
                <Message>Não encontramos meetups recomendados para você</Message>
              )}
            </ScrollView>
          )) || <ActivityIndicator size="large" color="white" />
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.meetup.meetupList.loading,
  error: state.meetup.meetupList.error,
  meetups: state.meetup.meetupList.meetups,
});

const mapDispatchToProps = dispatch => bindActionCreators(MeetupActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
