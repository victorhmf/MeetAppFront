/* eslint-disable react-native/no-raw-text */
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { UserActions } from '~/store/ducks/user';

import MultipleCheckBox from '~/components/MultipleCheckBox';
import { ScrollView, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import {
  Container, Label, Input, Button, ButtonText, Error,
} from './styles';

class Profile extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    username: PropTypes.string.isRequired,
    preferences: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
      }),
    ).isRequired,
    updateUserRequest: PropTypes.func.isRequired,
    userReset: PropTypes.func.isRequired,
    errors: PropTypes.arrayOf(
      PropTypes.shape({
        message: PropTypes.string,
        field: PropTypes.string,
        validation: PropTypes.string,
      }),
    ).isRequired,
    loading: PropTypes.bool.isRequired,
  };

  state = {
    username: '' || this.props.username,
    password: '',
    passwordConfirmation: '',
    checkboxes: [
      {
        id: 1,
        title: 'Front-end',
        checked: false,
      },
      {
        id: 2,
        title: 'Back-end',
        checked: false,
      },
      {
        id: 3,
        title: 'Mobile',
        checked: false,
      },
      {
        id: 4,
        title: 'Devops',
        checked: false,
      },
      {
        id: 5,
        title: 'Gestão',
        checked: false,
      },
      {
        id: 6,
        title: 'Marketing',
        checked: false,
      },
    ],
  };

  componentDidMount() {
    const { userReset } = this.props;
    userReset();
    this.setPreferences();
  }

  setPreferences = () => {
    const { preferences } = this.props;
    const { checkboxes } = this.state;

    const changedCheckBoxes = checkboxes.map((checkbox) => {
      preferences.map((preference) => {
        if (preference.id === checkbox.id) {
          checkbox.checked = !checkbox.checked;
        }
      });
      return checkbox;
    });

    this.setState({ checkboxes: changedCheckBoxes });
  };

  handleCheckBox = (checkboxes) => {
    this.setState(checkboxes);
  };

  handleSubmit = () => {
    const { updateUserRequest } = this.props;
    const userData = this.filterEmptyFields();

    updateUserRequest(userData);
  };

  filterEmptyFields = () => {
    const {
      checkboxes, username, password, passwordConfirmation,
    } = this.state;

    const { username: currentUserName } = this.props;

    const preferences = checkboxes
      .filter(preference => preference.checked)
      .map(preference => preference.id);

    const userData = {
      username,
      password,
      password_confirmation: passwordConfirmation,
      preferences,
    };

    Object.keys(userData).forEach((key) => {
      if (!userData[key] || userData[key] === currentUserName) {
        delete userData[key];
      }
    });

    return userData;
  };

  render() {
    const {
      username, password, passwordConfirmation, checkboxes,
    } = this.state;
    const { errors, loading } = this.props;
    return (
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          {errors.map(
            error => error.field === 'username' && <Error key={error.validation}>{error.message}</Error>,
          )}
          <Label>Nome</Label>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu nome"
            underlineColorAndroid="transparent"
            value={username}
            onChangeText={text => this.setState({ username: text })}
          />
          {errors.map(
            error => error.field === 'password'
              && error.validation === 'min' && <Error key={error.field}>{error.message}</Error>,
          )}
          <Label>Senha</Label>
          <Input
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Sua senha secreta"
            underlineColorAndroid="transparent"
            secureTextEntry
            value={password}
            onChangeText={text => this.setState({ password: text })}
          />
          {errors.map(
            error => error.validation === 'confirmed' && (
            <Error key={error.validation}>{error.message}</Error>
            ),
          )}
          <Label>Confirmação de senha</Label>
          <Input
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Sua senha secreta"
            underlineColorAndroid="transparent"
            secureTextEntry
            value={passwordConfirmation}
            onChangeText={text => this.setState({ passwordConfirmation: text })}
          />
          {errors.map(
            error => error.field === 'preferences' && (
            <Error key={error.validation}>{error.message}</Error>
            ),
          )}
          <Label withMargin>Preferências</Label>
          <MultipleCheckBox checkboxes={checkboxes} handleCheckBox={this.handleCheckBox} />
          <Button onPress={this.handleSubmit}>
            {loading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <ButtonText>Salvar</ButtonText>
            )}
          </Button>
        </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  username: state.login.user.username,
  preferences: state.login.user.preferences,
  errors: state.user.errors,
  loading: state.user.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
