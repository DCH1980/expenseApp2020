import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  getEverything: [],
};

// Create context
export const GlobalContext = createContext();

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, getEverything] = useReducer(AppReducer);
  console.log(state);
  return (
    <GlobalContext.Provider
      value={{
        state,
        getEverything,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
