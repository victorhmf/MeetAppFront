/* eslint-disable react-native/no-raw-text */
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { UserActions } from '~/store/ducks/user';
import MultipleCheckBox from '~/components/MultipleCheckBox';
import { ActivityIndicator } from 'react-native';

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

  handleSubmit = async () => {
    const { checkboxes } = this.state;
    const { user, updateUserRequest } = this.props;

    const preferences = checkboxes
      .filter(preference => preference.checked)
      .map(preference => preference.id);

    updateUserRequest({ preferences, firstLogin: false });
  };

  handleCheckBox = (checkboxes) => {
    this.setState(checkboxes);
  };

  render() {
    const { checkboxes } = this.state;
    const { user, loading } = this.props;

    return (
      <Container>
        <Title>Olá {user.username}</Title>
        <Paragraph>
          Parece que é seu primeiro acesso por aqui, comece escolhendo algumas preferências para
          selecionarmos os melhores meetups pra você:
        </Paragraph>
        <SubTitle>Preferências</SubTitle>
        <MultipleCheckBox checkboxes={checkboxes} handleCheckBox={this.handleCheckBox} />
        <Button onPress={this.handleSubmit}>
          {loading ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <ButtonText>Continuar</ButtonText>
          )}
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.login.user,
  loading: state.user.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Preferences);
