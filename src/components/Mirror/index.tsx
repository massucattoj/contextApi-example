import React, { useContext } from 'react';
import { Text } from 'react-native';

import { CountContext } from '../../contexts/AddCounter';

import { Container } from './styles';

const Counter: React.FC = () => {
  const { count } = useContext(CountContext);

  return (
    <Container>
      <Text style={{ fontSize: 38 }}> Mirror: {count}</Text>
    </Container>
  );
};

export default Counter;
