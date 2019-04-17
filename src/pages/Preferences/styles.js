import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${props => props.theme.colors.secondary};
  flex: 1;
  justify-content: center;
  padding: 0px 30px;
`;

export const Title = styled.Text`
  font-size: ${props => props.theme.fontSize.big};
  color: ${props => props.theme.colors.white};
  font-weight: bold;
  margin-bottom: 15px;
`;

export const Paragraph = styled.Text`
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.colors.light};
  margin-bottom: 30px;
  line-height: 28px;
`;

export const SubTitle = styled.Text`
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.colors.white};
  font-weight: bold;
  margin-bottom: 15px;
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
