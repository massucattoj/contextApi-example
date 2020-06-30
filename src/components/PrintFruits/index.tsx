import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { FruitsContext } from '../../contexts/Fruits';

const PrintFruits: React.FC = () => {
  const { fruits } = useContext(FruitsContext);

  let text = '';
  fruits.forEach((fruit) => {
    if (fruit.quantity > 1) {
      text += `${fruit.quantity} ${fruit.name}s `;
    } else {
      text += `${fruit.quantity} ${fruit.name} `;
    }
  });

  return (
    <View
      style={{
        marginTop: -100,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ marginBottom: 40, marginTop: -200, fontWeight: 'bold' }}>
        {text}
      </Text>
    </View>
  );
};

export default PrintFruits;
