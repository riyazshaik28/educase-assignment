import React, { createContext, useState } from "react";

// 1. Create context
export const AppContext = createContext();

// 2. Create provider component
export const AppProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1); // Default to page 1

  return (
    <AppContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </AppContext.Provider>
  );
};
