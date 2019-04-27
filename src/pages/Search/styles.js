import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  background: ${props => props.theme.colors.secondary};
  flex: 1;
  padding: 30px 20px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  height: 40px;
  background: ${props => props.theme.colors.highDark};
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const SearchIcon = styled(Icon)`
  padding: 10px;
`;

export const SearchIndicator = styled.ActivityIndicator`
  padding: 10px;
`;

export const SearchInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.colors.white};
  font-weight: normal;
  flex: 1;
  padding-left: 0;
`;

export const Error = styled.Text`
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.colors.danger};
`;
