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
  static navigationOptions = ({ navigation }) => ({ headerTitle: navigation.state.params.title })
  

  componentDidMount() {
    const { id } = this.props.navigation.state.params;
    const { showMeetupRequest } = this.props;

    showMeetupRequest(id);
  }

  handleSubmit = () => {
    const { id } = this.props.navigation.state.params;
    const { subscribeMeetupRequest } = this.props;

    subscribeMeetupRequest(id);
  };

  render() {
    const { meetup, showMeetupError, subscribeMeetupError, subscribeMeetupLoading } = this.props;
    return (
      <Container>
        {showMeetupError ? (
          <InfoContainer>
            <Error>{showMeetupError.error.message}</Error>
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
                {subscribeMeetupError && <Error>{subscribeMeetupError.error.message}</Error>}
                <Button onPress={this.handleSubmit}>
                  {subscribeMeetupLoading ? (
                    <ActivityIndicator size="small" color="white" />
                  ) : (
                    <ButtonText>Inscreva-se</ButtonText>
                  )}
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
  meetup: state.meetup.activeMeetup.meetup,
  showMeetupError: state.meetup.activeMeetup.error,
  subscribeMeetupError: state.meetup.subscribedMeetup.error,
  subscribeMeetupLoading: state.meetup.subscribedMeetup.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(MeetupActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Meetup);
