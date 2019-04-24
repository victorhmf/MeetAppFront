import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Container,
  StyledImage,
  InfoContainer,
  InfoContent,
  Title,
  SubTitle,
  NavigateButton,
} from './styles';

const MeetupItem = ({ item }) => (
  <Container>
    <StyledImage source={{ uri: item.image }} />
    <InfoContainer>
      <InfoContent>
        <Title numberOfLines={1} ellipsizeMode="tail">
          {item.title}
        </Title>
        <SubTitle>{item.members} membros</SubTitle>
      </InfoContent>
      <NavigateButton>
        <Icon name="angle-right" size={20} color="white" />
      </NavigateButton>
    </InfoContainer>
  </Container>
);

export default MeetupItem;
