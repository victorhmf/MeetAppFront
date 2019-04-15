/* eslint-disable react-native/no-raw-text */
import React, { Component } from 'react';

import { ActivityIndicator } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { UserActions } from '~/store/ducks/user';

import {
  Container,
  LogoContainer,
  Logo,
  Label,
  Input,
  Button,
  ButtonText,
  Error,
} from '../Signin/styles';

import PropTypes from 'prop-types';

class Signup extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    createUserRequest: PropTypes.func.isRequired,
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
    username: '',
    email: '',
    password: '',
  };

  handleSubmit = async () => {
    const { username, email, password } = this.state;
    const { createUserRequest } = this.props;

    createUserRequest({ username, email, password });
  };

  render() {
    const { navigation, errors, loading } = this.props;
    const { username, email, password } = this.state;

    return (
      <Container>
        <LogoContainer>
          <Logo source={require('~/images/logo.png')} />
        </LogoContainer>
        {errors.map(
          error => error.field === 'username' && <Error key={error.field}>{error.message}</Error>,
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
          error => error.field === 'email' && <Error key={error.field}>{error.message}</Error>,
        )}
        <Label>Email</Label>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Digite seu e-mail"
          underlineColorAndroid="transparent"
          value={email}
          onChangeText={text => this.setState({ email: text })}
        />
        {errors.map(
          error => error.field === 'password' && <Error key={error.field}>{error.message}</Error>,
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
        <Button primary onPress={this.handleSubmit}>
          {loading ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <ButtonText white bold>
              Criar Conta
            </ButtonText>
          )}
        </Button>
        <Button onPress={() => navigation.navigate('Signin')}>
          <ButtonText>Já tenho conta</ButtonText>
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.user.loading,
  errors: state.user.errors,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signup);
