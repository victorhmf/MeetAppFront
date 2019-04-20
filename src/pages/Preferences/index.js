/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-raw-text */
import React, { Component } from 'react';
import { CheckBox } from 'react-native-elements';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { UserActions } from '~/store/ducks/user';
import api from '~/services/api';

import {
  Container, Title, Paragraph, Button, ButtonText, SubTitle,
} from './styles';

class Preferences extends Component {
  static navigationOptions = { header: null };

  state = {
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

  toggleCheckBox = (id) => {
    const { checkboxes } = this.state;
    const changedCheckBoxes = checkboxes.map((checkbox) => {
      if (checkbox.id === id) {
        checkbox.checked = !checkbox.checked;
      }
      return checkbox;
    });

    this.setState({ checkboxes: changedCheckBoxes });
  };

  handleSubmit = async () => {
    const { checkboxes } = this.state;
    const { user, updateUserRequest } = this.props;

    const preferences = checkboxes
      .filter(preference => preference.checked)
      .map(preference => preference.id);

    updateUserRequest({ preferences });
  };

  render() {
    const { checkboxes } = this.state;
    const { user } = this.props;

    return (
      <Container>
        <Title>Olá {user.username}</Title>
        <Paragraph>
          Parece que é seu primeiro acesso por aqui, comece escolhendo algumas preferências para
          selecionarmos os melhores meetups pra você:
        </Paragraph>
        <SubTitle>Preferências</SubTitle>
        {checkboxes.map(checkbox => (
          <CheckBox
            key={checkbox.id}
            title={checkbox.title}
            checked={checkbox.checked}
            checkedIcon="square"
            uncheckedIcon="square"
            checkedColor="#E5556E"
            uncheckedColor="#666"
            textStyle={{ fontSize: 18, color: 'white', fontWeight: 'normal' }}
            containerStyle={{
              backgroundColor: 'transparent',
              borderWidth: 0,
              padding: 0,
              marginLeft: 0,
            }}
            onPress={() => this.toggleCheckBox(checkbox.id)}
          />
        ))}
        <Button onPress={this.handleSubmit}>
          <ButtonText>Continuar</ButtonText>
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.login.user,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Preferences);
