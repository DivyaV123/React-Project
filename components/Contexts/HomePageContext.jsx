'use client'
import React, { createContext,useState } from "react";
export const HomePageContext = createContext(); 

const HomePageContextProvider = ({ children }) => {
const [selectedBranch,setSelectedBranch]=useState('Bengalore')
  return (
    <HomePageContext.Provider value={{
      selectedBranch, 
      setSelectedBranch
    }}>{children}</HomePageContext.Provider>
  );
};

export default HomePageContextProvider; 

