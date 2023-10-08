import { DateTime } from "luxon";
import React, { useState, createContext } from "react";

export const HelperContext = createContext();

export const HelperContextProvider = (props) => {
  const getFormattedTimeFromDT = (dt) => {
    const format = "cccc, dd LLL yyyy | hh:mm a";
    return DateTime.fromSeconds(dt)
      .setZone("America/Sao_Paulo")
      .toFormat(format);
  };

  return (
    <HelperContext.Provider value={{ getFormattedTimeFromDT }}>
      {props.children}
    </HelperContext.Provider>
  );
};
