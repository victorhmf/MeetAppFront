import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';

import {
  Container,
  StyledImage,
  InfoContainer,
  InfoContent,
  Title,
  SubTitle,
  NavigateButton,
} from './styles';

const MeetupItem = ({ item, navigation }) => (
  <Container>
    <StyledImage source={{ uri: item.file.url }} />
    <InfoContainer>
      <InfoContent>
        <Title numberOfLines={1} ellipsizeMode="tail">
          {item.title}
        </Title>
        <SubTitle>{item.__meta__.members} membros</SubTitle>
      </InfoContent>
      <NavigateButton onPress={() => navigation.navigate('Meetup', { meetupId: item.id })}>
        <Icon name="angle-right" size={20} color="white" />
      </NavigateButton>
    </InfoContainer>
  </Container>
);

export default withNavigation(MeetupItem);
