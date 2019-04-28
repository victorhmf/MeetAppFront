/* eslint-disable react-native/no-raw-text */
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView, ActivityIndicator } from 'react-native';
import DatePicker from 'react-native-datepicker';
import ImagePicker from 'react-native-image-picker';
import moment from 'moment';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MeetupActions } from '~/store/ducks/meetup';
import PropTypes from 'prop-types';

import {
  Container,
  Label,
  Input,
  Button,
  ButtonText,
  Error,
  ImageButton,
  StyledImage,
} from './styles';

import MultipleCheckBox from '~/components/MultipleCheckBox';

class NewMeetup extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    createMeetupRequest: PropTypes.func.isRequired,
    createMeetupReset: PropTypes.func.isRequired,
    errors: PropTypes.arrayOf(
      PropTypes.shape({
        message: PropTypes.string,
        field: PropTypes.string,
        validation: PropTypes.string,
      }),
    ),
    loading: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    errors: null,
  }

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="plus-square" size={20} color={tintColor} />,
  };

  state = {
    title: '',
    description: '',
    date: '',
    image: null,
    location: '',
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
    const { navigation, createMeetupReset } = this.props;
    const initialState = this.state;

    this.navListener = navigation.addListener('didFocus', () => {
      this.setState(initialState);
      createMeetupReset();
    });
  }

  componentWillUnmount() {
    this.navListener.remove();
  }

  handleCheckBox = (checkboxes) => {
    this.setState(checkboxes);
  };

  handleChooseImage = () => {
    const options = {
      noData: true,
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      const {
        uri, type, fileName, fileSize,
      } = response;

      this.setState({
        image: {
          name: fileName,
          size: fileSize,
          uri,
          type,
        },
      });

      if (response.didCancel) {
        this.setState({ image: null });
      }
    });
  };

  handleSubmit = () => {
    const {
      image, title, description, date, location, checkboxes,
    } = this.state;
    const { createMeetupRequest } = this.props;

    const preferences = checkboxes
      .filter(preference => preference.checked)
      .map(preference => preference.id);

    createMeetupRequest(image, {
      title,
      description,
      date,
      location,
      preferences,
    });
  };

  render() {
    const {
      title, description, location, date, checkboxes, image,
    } = this.state;
    const { loading, errors } = this.props;
    return (
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          {errors && errors.map(
            error => error.field === 'title' && <Error key={error.validation}>{error.message}</Error>,
          )}
          <Label>Título</Label>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite o título do meetup"
            underlineColorAndroid="transparent"
            value={title}
            onChangeText={text => this.setState({ title: text })}
          />
          {errors && errors.map(
            error => error.field === 'description' && (
            <Error key={error.validation}>{error.message}</Error>
            ),
          )}
          <Label>Descrição</Label>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Descreve seu meetup"
            underlineColorAndroid="transparent"
            value={description}
            onChangeText={text => this.setState({ description: text })}
          />
          {errors && errors.map(
            error => error.field === 'date' && <Error key={error.validation}>{error.message}</Error>,
          )}
          <Label>Data</Label>
          <DatePicker
            style={{ marginBottom: 15, width: '100%' }}
            date={date}
            mode="datetime"
            placeholder="Selecione a data"
            format="YYYY-MM-DD HH:mm"
            minDate={moment().format('YYYY-MM-DD')}
            maxDate={moment()
              .add(2, 'years')
              .format('YYYY-MM-DD')}
            customStyles={{
              dateInput: {
                alignItems: 'flex-start',
                borderWidth: 0,
              },
              placeholderText: {
                color: '#999',
                fontSize: 20,
              },
              dateText: {
                color: 'white',
                fontSize: 20,
              },
            }}
            onDateChange={(text) => {
              this.setState({ date: text });
            }}
          />
          {errors && errors.map(
            error => error.field === 'file' && (
            <Error key={error.validation}>Por favor, insira uma imagem válida.</Error>
            ),
          )}
          <Label withMargin>Imagem</Label>
          <ImageButton onPress={this.handleChooseImage}>
            {image ? (
              <StyledImage source={{ uri: image.uri }} />
            ) : (
              <Icon name="camera" size={20} color="white" />
            )}
          </ImageButton>

          {errors && errors.map(
            error => error.field === 'location' && <Error key={error.validation}>{error.message}</Error>,
          )}
          <Label>Localização</Label>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Onde seu meetup irá acontecer?"
            underlineColorAndroid="transparent"
            value={location}
            onChangeText={text => this.setState({ location: text })}
          />

          {errors && errors.map(
            error => error.field === 'preferences' && (
            <Error key={error.validation}>{error.message}</Error>
            ),
          )}
          <Label withMargin>Tema do meetup</Label>
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
  loading: state.meetup.newMeetup.loading,
  errors: state.meetup.newMeetup.errors,
});

const mapDispatchToProps = dispatch => bindActionCreators(MeetupActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewMeetup);
