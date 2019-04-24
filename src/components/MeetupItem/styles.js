import styled from 'styled-components/native';

export const Container = styled.View`
  width: 290px;
  background-color: white;
  margin-right: 20px;
  margin-bottom: 30px;
  border-radius: 5px;
`;

export const StyledImage = styled.Image`
  width: 290px;
  height: 110px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;
export const InfoContainer = styled.View`
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InfoContent = styled.View`
  flex: 1;
  margin-right: 20px;
`;

export const Title = styled.Text`
  color: ${props => props.theme.colors.darker};
  font-size: ${props => props.theme.fontSize.small};
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  color: ${props => props.theme.colors.regular};
  font-size: ${props => props.theme.fontSize.tiny};
`;

export const NavigateButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background-color: ${props => props.theme.colors.primary};
  width: 40px;
  height: 40px;
  margin: 5px;
`;
