import React, { useState, createContext } from "react";

export const CarContext = createContext();

export const CarContextProvider = (props) => {
  const [car, setCar] = useState({ make: "", model: "", color: "" });
  const [carMakers, setCarMakers] = useState([]);
  return (
    <CarContext.Provider value={{ car, setCar, carMakers, setCarMakers }}>
      {props.children}
    </CarContext.Provider>
  );
};
