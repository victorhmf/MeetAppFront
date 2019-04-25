import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${props => props.theme.colors.secondary};
  flex: 1;
  justify-content: center;
  /* align-items: flex-start; */
  align-items: center;
  padding: 30px 20px;
`;

export const Label = styled.Text`
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.colors.white};
  font-weight: bold;
  margin-bottom: ${props => (props.withMargin ? '15px' : '0')};
`;

export const Message = styled.Text`
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.colors.regular};
  margin-bottom: 20px;
`;

export const Error = styled.Text`
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.colors.danger};
  text-align: center;
`;
