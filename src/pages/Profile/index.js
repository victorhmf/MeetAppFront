/* eslint-disable react-native/no-raw-text */
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { UserActions } from '~/store/ducks/user';

import MultipleCheckBox from '~/components/MultipleCheckBox';
import { ScrollView } from 'react-native';

import {
  Container, Label, Input, Button, ButtonText,
} from './styles';

class Profile extends Component {
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

  }

  render() {
    const {
      username, password, passwordConfirmation, checkboxes,
    } = this.state;
    return (
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Label>Nome</Label>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu nome"
            underlineColorAndroid="transparent"
            value={username}
            onChangeText={text => this.setState({ username: text })}
          />
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
          <Label withMargin>Preferências</Label>
          <MultipleCheckBox checkboxes={checkboxes} handleCheckBox={this.handleCheckBox} />
          <Button onPress={() => {}}>
            <ButtonText>Salvar</ButtonText>
          </Button>
        </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  username: state.login.user.username,
  preferences: state.login.user.preferences,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
