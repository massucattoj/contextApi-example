import React from 'react';

import Counter from './components/Counter';
import Mirror from './components/Mirror';
import SelectFruits from './components/SelectFruits';
import PrintFruits from './components/PrintFruits';

import { CountProvider } from './contexts/AddCounter';
import { FruitsProvider } from './contexts/Fruits';

const App: React.FC = () => {
  return (
    <CountProvider>
      <Counter />
      <Mirror />
      <FruitsProvider>
        <SelectFruits />
        <PrintFruits />
      </FruitsProvider>
    </CountProvider>
  );
};

export default App;
