import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${props => props.theme.colors.secondary};
  flex: 1;
  justify-content: center;
  padding: 0px 30px;
`;

export const LogoContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 35px;
  height: 35px;
  margin-bottom: 15px;
`;

export const Label = styled.Text`
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.colors.white};
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  font-size: ${props => props.theme.fontSize.medium};
  color: ${props => props.theme.colors.white};
  margin-bottom: 15px;
  padding-left: 0;
`;

export const Button = styled.TouchableOpacity`
  background: ${props => (props.primary ? props.theme.colors.primary : props.theme.colors.transparent)};
  border-radius: 50px;
  padding: 15px;
`;

export const ButtonText = styled.Text`
  text-align: center;
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => (props.white ? props.theme.colors.white : props.theme.colors.regular)};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
`;

export const Error = styled.Text`
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.colors.danger};
  margin-bottom: 5px;
`;
