import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${props => props.theme.colors.secondary};
  flex: 1;
  justify-content: center;
  padding: 30px;
`;

export const Label = styled.Text`
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.colors.white};
  font-weight: bold;
  margin-bottom: ${props => (props.withMargin ? '15px' : '0')};
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
  background: ${props => props.theme.colors.primary};
  border-radius: 50px;
  padding: 15px;
  margin-top: 20px;
`;

export const ButtonText = styled.Text`
  text-align: center;
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.colors.white};
  font-weight: bold;
`;

export const Error = styled.Text`
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.colors.danger};
  margin-bottom: 5px;
`;

export const ImageButton = styled.TouchableOpacity`
  background: ${props => props.theme.colors.transparent};
  border-radius: 5px;
  border: ${props => `1px dashed ${props.theme.colors.regular}`};
  height: 100px;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  overflow: hidden;
`;

export const StyledImage = styled.Image`
  height: 100px;
  width: 100%;
  border-radius: 5px;
`;
