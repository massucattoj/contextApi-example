import React, { useContext } from 'react';
import { Text } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import { FruitsContext } from '../../contexts/Fruits';

import {
  Container,
  FruitName,
  DecreaseButton,
  IncreaseButton,
  FruitsContainer,
  ButtonsContainer,
} from './styles';

const SelectFruits: React.FC = () => {
  const { fruits, setFruits } = useContext(FruitsContext);

  function handleDecrease(fruitName: string): void {
    const increaseFruit = fruits.map((fruit) =>
      fruit.name === fruitName && fruit.quantity > 0
        ? { ...fruit, quantity: fruit.quantity - 1 }
        : fruit
    );
    setFruits(increaseFruit);
  }

  function handleIncrease(fruitName: string): void {
    const increaseFruit = fruits.map((fruit) =>
      fruit.name === fruitName
        ? { ...fruit, quantity: fruit.quantity + 1 }
        : fruit
    );
    setFruits(increaseFruit);
  }

  return (
    <Container>
      {fruits.map((fruit) => (
        <FruitsContainer key={fruit.name}>
          <FruitName>{fruit.name}</FruitName>

          <ButtonsContainer>
            <DecreaseButton onPress={() => handleDecrease(fruit.name)}>
              <Icon name="minus-circle" size={24} />
            </DecreaseButton>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
              {fruit.quantity}
            </Text>

            <IncreaseButton onPress={() => handleIncrease(fruit.name)}>
              <Icon name="plus-circle" size={24} />
            </IncreaseButton>
          </ButtonsContainer>
        </FruitsContainer>
      ))}
    </Container>
  );
};

export default SelectFruits;
