import React, { useState, createContext } from "react";

export const LocalStorageContext = createContext();

export const LocalStorageContextProvider = (props) => {
  function createInitialTables(parkedCars, checkedOutCars) {
   console.log(parkedCars, checkedOutCars)
    localStorage.setItem("parkedCars", parkedCars);
    localStorage.setItem("checkedOutCars", checkedOutCars);
  }
  return (
    <LocalStorageContext.Provider value={{ createInitialTables }}>
      {props.children}
    </LocalStorageContext.Provider>
  );
};
