import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${props => props.theme.colors.secondary};
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  padding: 30px 20px;
`;

export const Label = styled.Text`
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.colors.white};
  font-weight: bold;
  margin-bottom: ${props => (props.withMargin ? '15px' : '0')};
`;
