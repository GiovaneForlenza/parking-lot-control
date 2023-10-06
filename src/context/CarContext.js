import React, { useState, createContext } from "react";

export const CarContext = createContext();

export const CarContextProvider = (props) => {
  const [car, setCar] = useState({ make: "Ford", model: "", color: "" });

  return (
    <CarContext.Provider value={{ car, setCar }}>
      {props.children}
    </CarContext.Provider>
  );
};
