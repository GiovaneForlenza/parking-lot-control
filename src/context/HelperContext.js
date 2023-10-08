import { DateTime } from "luxon";
import React, { useState, createContext } from "react";

export const HelperContext = createContext();

const calculateTotalParkedTime = (inTime, outTime) => {
  let timeParked = outTime - inTime;
  return Math.round(timeParked / 60 / 60);
};
export const HelperContextProvider = (props) => {
  const HOURLY_PRICE = 4;

  const getFormattedTimeFromDT = (dt) => {
    const format = "cccc, dd LLL yyyy | hh:mm a";
    return DateTime.fromSeconds(dt)
      .setZone("America/Sao_Paulo")
      .toFormat(format);
  };

  const getCalculatedPriceToPay = (inTime, outTime) => {
    if(outTime!==''){

      let hours = calculateTotalParkedTime(inTime, outTime);
      return `$${hours * HOURLY_PRICE}`;
    }
  };

  return (
    <HelperContext.Provider
      value={{ getFormattedTimeFromDT, getCalculatedPriceToPay }}
    >
      {props.children}
    </HelperContext.Provider>
  );
};
export { calculateTotalParkedTime };
