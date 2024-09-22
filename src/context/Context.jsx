import React, { useState } from "react";
import { createContext } from "react";
const MyContext = createContext(null);

export default MyContext;
export const ContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const updateCount = (newCount) => {
    setCount(newCount);
  };
  const contextValue = { count, updateCount };
  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};