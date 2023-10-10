import React, { useState, createContext } from "react";

export const LocalStorageContext = createContext();

export const LOCAL_STORAGE_KEYS = {
  parkedCars: "parkedCars",
  checkedOutCars: "checkedOutCars",
};

export const LocalStorageContextProvider = (props) => {
  function createInitialTables(parkedCars, checkedOutCars) {
    if (!getItemsFromTable(LOCAL_STORAGE_KEYS.parkedCars))
      //stringify array
      localStorage.setItem(
        LOCAL_STORAGE_KEYS.parkedCars,
        JSON.stringify(parkedCars)
      );

    if (!getItemsFromTable(LOCAL_STORAGE_KEYS.checkedOutCars))
      localStorage.setItem(
        LOCAL_STORAGE_KEYS.checkedOutCars,
        JSON.stringify(checkedOutCars)
      );
  }
  function getItemsFromTable(table) {
    return JSON.parse(localStorage.getItem(table));
  }

  function updateTable(table, content) {
    localStorage.setItem(table, JSON.stringify(content));
  }
  return (
    <LocalStorageContext.Provider
      value={{ createInitialTables, getItemsFromTable, updateTable }}
    >
      {props.children}
    </LocalStorageContext.Provider>
  );
};
