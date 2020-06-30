import React, { createContext, useState } from 'react';

// Definitir o formato do contexto
interface FruitsProps {
  name: string;
  quantity: number;
}

interface FruitsContextProps {
  fruits: FruitsProps[];
  setFruits: Function;
}

export const FruitsContext = createContext<FruitsContextProps>(
  {} as FruitsContextProps
);

export const FruitsProvider: React.FC = ({ children }) => {
  const [fruits, setFruits] = useState([
    { name: 'Abacaxi', quantity: 0 },
    { name: 'Jabuticaba', quantity: 0 },
    { name: 'Laranja', quantity: 0 },
    { name: 'Morango', quantity: 0 },
  ]);

  return (
    <FruitsContext.Provider value={{ fruits, setFruits }}>
      {children}
    </FruitsContext.Provider>
  );
};
