import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${props => props.theme.colors.secondary};
  flex: 1;
`;

export const InfoContainer = styled.View`
  flex: 1;
  justify-content: center;
  padding: 30px;
`;

export const StyledImage = styled.Image`
  flex: 1;
  height: 210px;
`;

export const Title = styled.Text`
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.colors.white};
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  font-size: ${props => props.theme.fontSize.tiny};
  color: ${props => (props.light ? props.theme.colors.light : props.theme.colors.dark)};
  margin-bottom: 10px;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
`;

export const Paragraph = styled.Text`
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.colors.light};
  margin-bottom: 30px;
  line-height: 28px;
`;

export const Button = styled.TouchableOpacity`
  background: ${props => props.theme.colors.primary};
  border-radius: 50px;
  padding: 15px;
  margin-top: 30px;
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
  text-align: center;
`;
