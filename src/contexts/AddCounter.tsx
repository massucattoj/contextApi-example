import React, { createContext, useState } from 'react';

// Definir o formato do contexto, as informacoes que vao ser armazenadas
interface CountContextProps {
  count: number;
  setCount: Function;
}

// Criando context ( CountContext eh uma instancia de Context )
export const CountContext = createContext<CountContextProps>(
  {} as CountContextProps
);

export const CountProvider: React.FC = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};
