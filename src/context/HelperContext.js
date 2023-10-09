import { DateTime } from "luxon";
import React, { useState, createContext, useContext } from "react";
import { CarContext } from "./CarContext";
import { TablesContext } from "./TablesContext";

export const HelperContext = createContext();

const calculateTotalParkedTime = (inTime, outTime) => {
  let timeParked = outTime - inTime;
  return Math.round(timeParked / 60 / 60);
};
export const HelperContextProvider = (props) => {
  const {
    allParkedCars,
    setAllParkedCars,
    currentlyParkedCars,
    setCurrentlyParkedCars,
  } = useContext(CarContext);

  const { shownTable } = useContext(TablesContext);

  const HOURLY_PRICE = 4;

  const getFormattedTimeFromDT = (dt) => {
    const format = "cccc, dd LLL yyyy | hh:mm a";
    return DateTime.fromSeconds(dt)
      .setZone("America/Sao_Paulo")
      .toFormat(format);
  };

  const getCalculatedPriceToPay = (inTime, outTime) => {
    if (outTime !== "") {
      let hours = calculateTotalParkedTime(inTime, outTime);
      return `$${hours * HOURLY_PRICE}`;
    }
  };

  const sortTableByAttribute = (table, attribute) => {
    if (shownTable === "Parked cars") {
      console.log(currentlyParkedCars);
    } else {
      console.log(allParkedCars);
    }
  };

  return (
    <HelperContext.Provider
      value={{
        getFormattedTimeFromDT,
        getCalculatedPriceToPay,
        sortTableByAttribute,
      }}
    >
      {props.children}
    </HelperContext.Provider>
  );
};
export { calculateTotalParkedTime };
