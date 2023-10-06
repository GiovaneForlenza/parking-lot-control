import React, { useState, createContext } from "react";

export const DisplayPageContext = createContext();

export const DisplayPageContextProvider = (props) => {
  const [displayPage, setDisplayPage] = useState("CheckIn");

  return (
    <DisplayPageContext.Provider value={{ displayPage, setDisplayPage }}>
      {props.children}
    </DisplayPageContext.Provider>
  );
};
