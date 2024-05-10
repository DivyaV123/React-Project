'use client'
import React, { createContext,useState } from "react";
export const GlobalContext = createContext(); 

const GlobalContextProvider = ({ children }) => {
const [selectedBranch,setSelectedBranch]=useState('Bengalore')
const [selectedCourseId,setSelectedCourseId]=useState('1')
  return (
    <GlobalContext.Provider value={{
      selectedBranch, 
      setSelectedBranch,
      selectedCourseId,
      setSelectedCourseId
    }}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider; 