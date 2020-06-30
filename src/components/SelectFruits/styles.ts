import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  padding: 20px;
  margin-top: -100px;
`;

export const FruitsContainer = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
`;

export const FruitName = styled.Text`
  font-size: 16px;
`;
export const DecreaseButton = styled.TouchableOpacity`
  margin-right: 5px;
`;
export const IncreaseButton = styled.TouchableOpacity`
  margin-left: 5px;
`;
