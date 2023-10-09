import React, { useState, createContext } from "react";

export const TablesContext = createContext();

export const TablesContextProvider = (props) => {
  const [shownTable, setShownTable] = useState("Parked cars");

  return (
    <TablesContext.Provider
      value={{
        shownTable,
        setShownTable,
      }}
    >
      {props.children}
    </TablesContext.Provider>
  );
};
