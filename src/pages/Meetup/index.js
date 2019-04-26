/* eslint-disable react-native/no-raw-text */
import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MeetupActions } from '~/store/ducks/meetup';
import moment from 'moment';

import { ScrollView, ActivityIndicator } from 'react-native';

import {
  Container,
  InfoContainer,
  StyledImage,
  SubTitle,
  Paragraph,
  Title,
  Button,
  ButtonText,
  Error,
} from './styles';

class Meetup extends Component {
  state = {};

  componentDidMount() {
    const { meetupId } = this.props.navigation.state.params;
    const { showMeetupRequest } = this.props;

    showMeetupRequest(meetupId);
  }

  render() {
    const { meetup, error } = this.props;
    return (
      <Container>
        {error ? (
          <InfoContainer>
            <Error>{error.message}</Error>
          </InfoContainer>
        ) : (
          (meetup && (
            <ScrollView>
              <StyledImage source={{ uri: meetup.file.url }} />
              <InfoContainer>
                <Title>{meetup.title}</Title>
                <SubTitle>
                  {meetup.__meta__.members === '1'
                    ? `${meetup.__meta__.members} membro`
                    : `${meetup.__meta__.members} membros`}
                </SubTitle>
                <Paragraph>{meetup.description}</Paragraph>
                <SubTitle light bold>
                  Realizado em:
                </SubTitle>
                <SubTitle>{meetup.location}</SubTitle>
                <SubTitle light bold>
                  Data e Horário:
                </SubTitle>
                <SubTitle>
                  {moment(meetup.date)
                    .utc(false)
                    .format('DD/MM/YYYY HH:mm')}
                </SubTitle>
                <Button>
                  <ButtonText>Inscreva-se</ButtonText>
                </Button>
              </InfoContainer>
            </ScrollView>
          )) || <ActivityIndicator size="large" color="white" />
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  meetup: state.meetup.activeMeetup,
  error: state.meetup.errors,
});

const mapDispatchToProps = dispatch => bindActionCreators(MeetupActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Meetup);
