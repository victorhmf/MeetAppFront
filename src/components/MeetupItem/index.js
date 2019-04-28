import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import {
  Container,
  StyledImage,
  InfoContainer,
  InfoContent,
  Title,
  SubTitle,
  NavigateButton,
} from './styles';

const MeetupItem = ({ item, navigation, width }) => (
  <Container width={width}>
    <StyledImage source={{ uri: item.file.url }} />
    <InfoContainer>
      <InfoContent>
        <Title numberOfLines={1} ellipsizeMode="tail">
          {item.title}
        </Title>
        <SubTitle>
          {item.__meta__.members === '1'
            ? `${item.__meta__.members} membro`
            : `${item.__meta__.members} membros`}
        </SubTitle>
      </InfoContent>
      <NavigateButton
        onPress={() => navigation.navigate('Meetup', { id: item.id, title: item.title })}
      >
        <Icon name="angle-right" size={20} color="white" />
      </NavigateButton>
    </InfoContainer>
  </Container>
);

MeetupItem.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    __meta__: PropTypes.shape({
      members: PropTypes.string,
    }),
    file: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
  width: PropTypes.string.isRequired,
};

export default withNavigation(MeetupItem);
