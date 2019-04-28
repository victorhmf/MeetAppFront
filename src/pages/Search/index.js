import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MeetupActions } from '~/store/ducks/meetup';
import { FlatList } from 'react-native';
import MeetupItem from '~/components/MeetupItem';

import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import {
  Container,
  SearchInput,
  InputContainer,
  SearchIcon,
  SearchIndicator,
  Error,
} from './styles';

class Search extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    meetups: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      file_id: PropTypes.number,
    })),
    searchMeetupRequest: PropTypes.func.isRequired,
    searchMeetupReset: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.shape({
      error: PropTypes.shape({
        message: PropTypes.string,
      }),
    }),
  };

  static defaultProps = {
    error: null,
    meetups: null,
  }

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="search" size={20} color={tintColor} />,
  };

  state = {
    title: '',
  };

  componentDidMount() {
    const { navigation, searchMeetupReset } = this.props;
    const initialState = this.state;

    this.navListener = navigation.addListener('didFocus', () => {
      this.setState(initialState);
      searchMeetupReset();
    });
  }

  componentWillUnmount() {
    this.navListener.remove();
  }

  handleSubmit = () => {
    const { title } = this.state;
    const { searchMeetupRequest } = this.props;

    if (title) {
      searchMeetupRequest(title);
    }
  };

  renderListItem = ({ item }) => <MeetupItem width="100%" item={item} />;

  render() {
    const { meetups, loading, error } = this.props;
    const { title } = this.state;
    return (
      <Container>
        <InputContainer>
          {loading ? (
            <SearchIndicator size="small" color="white" />
          ) : (
            <SearchIcon name="search" size={16} color="#999" />
          )}
          <SearchInput
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Buscar meetups"
            underlineColorAndroid="transparent"
            value={title}
            onChangeText={text => this.setState({ title: text })}
            onSubmitEditing={this.handleSubmit}
          />
        </InputContainer>
        {error && <Error>{error.error.message}</Error>}
        {meetups && (
          <FlatList
            data={meetups}
            keyExtractor={item => String(item.id)}
            renderItem={this.renderListItem}
          />
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  meetups: state.meetup.searchedMeetup.meetups,
  loading: state.meetup.searchedMeetup.loading,
  error: state.meetup.searchedMeetup.error,
});

const mapDispatchToProps = dispatch => bindActionCreators(MeetupActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
