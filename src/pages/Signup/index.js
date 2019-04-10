/* eslint-disable react-native/no-raw-text */
import React, { Component } from 'react';

import { ActivityIndicator } from 'react-native';

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

import { showMessage } from 'react-native-flash-message';
import PropTypes from 'prop-types';

import api from '~/services/api';

export default class Signup extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    username: '',
    email: '',
    password: '',
    loading: false,
    errors: [],
  };

  handleSubmit = async () => {
    const { username, email, password } = this.state;
    const { navigate } = this.props.navigation;

    try {
      this.setState({ loading: true });

      await api.post('/users', { username, email, password });

      showMessage({
        message: 'Usuário criado com sucesso!',
        type: 'success',
        duration: 3000,
      });

      this.setState({ loading: false });
      navigate('Signin');
    } catch (error) {
      const { data } = error.response;
      this.setState({ errors: data, loading: false });
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    const {
      username, email, password, errors, loading,
    } = this.state;

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
        <Button onPress={() => navigate('Signin')}>
          <ButtonText>Já tenho conta</ButtonText>
        </Button>
      </Container>
    );
  }
}
