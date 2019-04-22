/* eslint-disable react-native/no-raw-text */
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView, ActivityIndicator } from 'react-native';
import DatePicker from 'react-native-datepicker';
import ImagePicker from 'react-native-image-picker';
import moment from 'moment';

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

export default class NewMeetup extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="plus-square" size={20} color={tintColor} />,
  };

  state = {
    title: '',
    description: '',
    date: '',
    imageSource: '',
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

  handleCheckBox = (checkboxes) => {
    this.setState(checkboxes);
  };

  handleChooseImage = () => {
    const options = {
      noData: true,
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      const source = { uri: response.uri };
      this.setState({ imageSource: source });
    });
  };

  render() {
    const {
      title, description, location, date, checkboxes, imageSource,
    } = this.state;
    return (
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Label>Título</Label>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite o título do meetup"
            underlineColorAndroid="transparent"
            value={title}
            onChangeText={text => this.setState({ title: text })}
          />
          <Label>Descrição</Label>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Descreve seu meetup"
            underlineColorAndroid="transparent"
            value={description}
            onChangeText={text => this.setState({ description: text })}
          />

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

          <Label withMargin>Imagem</Label>
          <ImageButton onPress={this.handleChooseImage}>
            {imageSource.uri ? (
              <StyledImage source={imageSource} />
            ) : (
              <Icon name="camera" size={20} color="white" />
            )}
          </ImageButton>

          <Label>Localização</Label>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Onde seu meetup irá acontecer?"
            underlineColorAndroid="transparent"
            value={location}
            onChangeText={text => this.setState({ location: text })}
          />
          <Label withMargin>Tema do meetup</Label>
          <MultipleCheckBox checkboxes={checkboxes} handleCheckBox={this.handleCheckBox} />
          <Button>
            <ButtonText>Salvar</ButtonText>
          </Button>
        </ScrollView>
      </Container>
    );
  }
}
