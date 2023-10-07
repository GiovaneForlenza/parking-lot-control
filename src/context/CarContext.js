import React, { useState, createContext } from "react";
import { getListOfCarModels } from "../services/carService";

export const CarContext = createContext();

export const CarContextProvider = (props) => {
  const [car, setCar] = useState({ plate: "", make: "", model: "", color: "" });
  const [carMakers, setCarMakers] = useState([]);
  const [carModels, setCarModels] = useState([]);
  const [carModelsFromMake, setCarModelsFromMake] = useState([]);

  const carColorList = [
    { name: "Black", hex: "030303" },
    { name: "Blue", hex: "193497" },
    { name: "Brown", hex: "4D2E2F" },
    { name: "Gray", hex: "807D7D" },
    { name: "Green", hex: "387933" },
    { name: "Purple", hex: "833676" },
    { name: "Red", hex: "CF3D29" },
    { name: "Silver", hex: "CACACA" },
    { name: "White", hex: "FFFFFF" },
    { name: "Yellow", hex: "E5C330" },
  ];

  const fetchAllCarModels = () => {
    getListOfCarModels().then((data) => {
      let listOfMakeAndModels = [];
      data.map((car) => {
        listOfMakeAndModels.push({ make: car.make, model: car.model });
      });
      setCarModels(listOfMakeAndModels);
    });
  };

  const getListOfModelsFromMake = (make) => {
    let listOfModels = [];
    carModels.map((car) => {
      if (car.make == make.toLowerCase()) {
        listOfModels.push(
          car.model.charAt(0).toUpperCase() + car.model.slice(1)
        );
      }
    });
    setCarModelsFromMake(listOfModels);
  };
  return (
    <CarContext.Provider
      value={{
        car,
        setCar,
        carMakers,
        setCarMakers,
        carModels,
        setCarModels,
        fetchAllCarModels,
        getListOfModelsFromMake,
        carModelsFromMake,
        carColorList,
      }}
    >
      {props.children}
    </CarContext.Provider>
  );
};
