/* eslint-disable react-native/no-raw-text */
import React, { Component } from 'react';

import { ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LoginActions } from '~/store/ducks/login';

import {
  Container, LogoContainer, Logo, Label, Input, Button, ButtonText, Error,
} from './styles';

class Signin extends Component {
  state = {
    email: '',
    password: '',
  };

  componentDidMount() {
    const { loginReset } = this.props;
    loginReset();
  }

  handleSubmit = async () => {
    const { email, password } = this.state;
    const { loginRequest } = this.props;

    loginRequest({ email, password });
  };

  render() {
    const { navigation, errors, loading } = this.props;
    const { email, password } = this.state;
    return (
      <Container>
        <LogoContainer>
          <Logo source={require('~/images/logo.png')} />
        </LogoContainer>
        {errors.map(
          error => (error.field === 'email' || error.status === 401) && (
          <Error key={error.field}>{error.message}</Error>
          ),
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
              Entrar
            </ButtonText>
          )}
        </Button>
        <Button onPress={() => navigation.navigate('Signup')}>
          <ButtonText>Criar conta grátis</ButtonText>
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.login.loading,
  errors: state.login.errors,
});

const mapDispatchToProps = dispatch => bindActionCreators(LoginActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signin);
