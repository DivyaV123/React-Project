'use client'
import React, { createContext,useState } from "react";
export const GlobalContext = createContext(); 

const GlobalContextProvider = ({ children }) => {
const [selectedBranch,setSelectedBranch]=useState('Bengalore')
  return (
    <GlobalContext.Provider value={{
      selectedBranch, 
      setSelectedBranch
    }}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider; 