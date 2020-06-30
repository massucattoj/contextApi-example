import React, { useContext } from 'react';
import { Text } from 'react-native';

import { CountContext } from '../../contexts/AddCounter';

import {
  Container,
  IncreaseButtonText,
  IncreaseButton,
  ButtonsContainer,
} from './styles';

const Counter: React.FC = () => {
  const { count, setCount } = useContext(CountContext);

  function handleIncrease(): void {
    setCount(count + 1);
  }

  function handleClear(): void {
    setCount(0);
  }

  return (
    <Container>
      <Text> Contador: {count}</Text>
      <ButtonsContainer>
        <IncreaseButton onPress={handleIncrease}>
          <IncreaseButtonText>Incrementar</IncreaseButtonText>
        </IncreaseButton>
        <IncreaseButton onPress={handleClear}>
          <IncreaseButtonText>Clear</IncreaseButtonText>
        </IncreaseButton>
      </ButtonsContainer>
    </Container>
  );
};

export default Counter;
