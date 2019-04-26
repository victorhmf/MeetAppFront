import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MeetupActions } from '~/store/ducks/meetup';

import { View, Text } from 'react-native';

// import { Container } from './styles';

class Meetup extends Component {
  state = {};

  componentDidMount() {
    const { meetupId } = this.props.navigation.state.params;
    const { showMeetupRequest } = this.props;

    showMeetupRequest(meetupId);
  }

  render() {
    return (
      <View>
        <Text>Meetup</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  meetup: state.meetup.activeMeetup,
});

const mapDispatchToProps = dispatch => bindActionCreators(MeetupActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Meetup);
