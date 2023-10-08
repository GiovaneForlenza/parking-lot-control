import React, { useState, createContext } from "react";
import { getListOfCarModels } from "../services/carService";

export const CarContext = createContext();

export const CarContextProvider = (props) => {
  const [car, setCar] = useState({ plate: "", make: "", model: "", color: "" });
  const [carMakers, setCarMakers] = useState([]);
  const [carModels, setCarModels] = useState([]);
  const [carModelsFromMake, setCarModelsFromMake] = useState([]);

  const carColorList = [
    { name: "Black", hex: "#030303" },
    { name: "Blue", hex: "#193497" },
    { name: "Brown", hex: "#4D2E2F" },
    { name: "Gray", hex: "#807D7D" },
    { name: "Green", hex: "#387933" },
    { name: "Purple", hex: "#833676" },
    { name: "Red", hex: "#CF3D29" },
    { name: "Silver", hex: "#CACACA" },
    { name: "White", hex: "#FFFFFF" },
    { name: "Yellow", hex: "#E5C330" },
  ];

  const allParkedCars = [
    {
      plate: "AAA-1111",
      make: "Ford",
      model: "Fiesta",
      color: "White",
      checkInTime: 1696487388,
      checkOutTime: 1696501788,
      amountPaid: "",
    },
    {
      plate: "AAA-2222",
      make: "Ford",
      model: "Fusion",
      color: "Red",
      checkInTime: 1696177788,
      checkOutTime: 1696199388,
      amountPaid: "",
    },
    {
      plate: "AAA-3333",
      make: "Bmw",
      model: "M5",
      color: "Blue",
      checkInTime: 1683506448,
      checkOutTime: 1683530268,
      amountPaid: "",
    },
    {
      plate: "AAA-4444",
      make: "Ferrari",
      model: "458-italia",
      color: "Black",
      checkInTime: 1658234148,
      checkOutTime: 1658278068,
      amountPaid: "",
    },
    {
      plate: "AAA-5555",
      make: "Ford",
      model: "F-150",
      color: "Yellow",
      checkInTime: 1658788608,
      checkOutTime: 1658799588,
      amountPaid: "",
    },
    {
      plate: "BBB-1111",
      make: "Gmc",
      model: "Yukon",
      color: "Green",
      checkInTime: 1660043868,
      checkOutTime: "",
      amountPaid: "",
    },
    {
      plate: "BBB-2222",
      make: "Bmw",
      model: "M7",
      color: "Brown",
      checkInTime: 1660085928,
      checkOutTime: "",
      amountPaid: "",
    },
    {
      plate: "CCC-3333",
      make: "Ford",
      model: "Fusion",
      color: "Silver",
      checkInTime: 1660077408,
      checkOutTime: 1660085148,
      amountPaid: "",
    },
    {
      plate: "DDD-4444",
      make: "Honda",
      model: "Accord",
      color: "Purple",
      checkInTime: 1647706368,
      checkOutTime: 1647716448,
      amountPaid: "",
    },
    {
      plate: "EEE-5555",
      make: "Toyota",
      model: "Camry",
      color: "Blue",
      checkInTime: 1646296788,
      checkOutTime: 1646309268,
      amountPaid: "",
    },
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
        allParkedCars,
      }}
    >
      {props.children}
    </CarContext.Provider>
  );
};
