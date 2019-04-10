/* eslint-disable react-native/no-raw-text */
import React, { Component } from 'react';

import AsyncStorage from '@react-native-community/async-storage';

import {
  Container, LogoContainer, Logo, Label, Input, Button, ButtonText,
} from './styles';

export default class Signin extends Component {
  state = {};

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <LogoContainer>
          <Logo source={require('~/images/logo.png')} />
        </LogoContainer>
        <Label>Email</Label>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Digite seu e-mail"
          underlineColorAndroid="transparent"
        />
        <Label>Senha</Label>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Sua senha secreta"
          underlineColorAndroid="transparent"
          secureTextEntry
        />
        <Button primary onPress={() => {}}>
          <ButtonText white bold>
            Entrar
          </ButtonText>
        </Button>
        <Button onPress={() => navigate('Signup')}>
          <ButtonText>Criar conta grátis</ButtonText>
        </Button>
      </Container>
    );
  }
}
