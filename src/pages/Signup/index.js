/* eslint-disable react-native/no-raw-text */
import React, { Component } from 'react';

import {
  Container, LogoContainer, Logo, Label, Input, Button, ButtonText,
} from '../Signin/styles';

export default class Signup extends Component {
  state = {};

  render() {
    const { navigate } = this.props.navigation;

    return (
      <Container>
        <LogoContainer>
          <Logo source={require('~/images/logo.png')} />
        </LogoContainer>
        <Label>Nome</Label>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Digite seu nome"
          underlineColorAndroid="transparent"
        />
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
            Criar Conta
          </ButtonText>
        </Button>
        <Button onPress={() => navigate('Signin')}>
          <ButtonText>Já tenho conta</ButtonText>
        </Button>
      </Container>
    );
  }
}
