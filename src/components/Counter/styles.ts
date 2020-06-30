import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  padding: 20px;

  margin: -30px 30px -250px 30px;
`;

export const ButtonsContainer = styled.View``;

export const IncreaseButton = styled.TouchableOpacity`
  background: #2192cf;
  width: 120px;
  height: 36px;

  justify-content: center;
  align-items: center;

  border-radius: 20px;
  margin-bottom: 5px;
`;
export const IncreaseButtonText = styled.Text`
  font-weight: bold;
`;
