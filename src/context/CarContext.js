import React, { useState, createContext, useContext } from "react";
import { getListOfCarModels } from "../services/carService";
import "react-toastify/dist/ReactToastify.css";
import { TablesContext } from "./TablesContext";
import { LOCAL_STORAGE_KEYS, LocalStorageContext } from "./LocalStorageContext";

export const CarContext = createContext();

export const CarContextProvider = (props) => {
  const {
    currentlyParkedCars,
    setCurrentlyParkedCars,
    checkedOutCars,
    setCheckedOutCars,
  } = useContext(TablesContext);
  const { getItemsFromTable, updateTable } = useContext(LocalStorageContext);

  const [car, setCar] = useState({
    plate: "",
    make: "",
    model: "",
    color: "",
  });
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

  /**
   * When use CheckIn/Checkout add a new object to the array
   */
  const checkInNewCar = () => {
    if (!isPlateParked(car.plate)) {
      const parkedCarsList = getItemsFromTable(LOCAL_STORAGE_KEYS.parkedCars);
      const date = getCurrentTimeStamp();
      const carToAdd = { ...car, checkInTime: date - 5000 };
      parkedCarsList.unshift(carToAdd);
      updateTable(LOCAL_STORAGE_KEYS.parkedCars, parkedCarsList);
      clearCarAttributes();
      return true;
    }
    return false;
  };

  const addCheckedOutCarToArray = (car) => {
    const checkedOutCarsList = getItemsFromTable(
      LOCAL_STORAGE_KEYS.checkedOutCars
    );
    car.checkOutTime = getCurrentTimeStamp();
    checkedOutCarsList.unshift(car);
    updateTable(LOCAL_STORAGE_KEYS.checkedOutCars, checkedOutCarsList);
  };

  // FIXME(Gionave): FIX ADD CHECKED OUT CAR TO ARRAY
  const checkOutParkedCar = (plate) => {
    const car = isPlateParked(plate);
    if (car) {
      const updatedCarList = getItemsFromTable(
        LOCAL_STORAGE_KEYS.parkedCars
      ).filter((parkedCar) => {
        return parkedCar.plate !== car.plate;
      });
      updateTable(LOCAL_STORAGE_KEYS.parkedCars, updatedCarList);
      addCheckedOutCarToArray(car);
      return true;
    }
    return false;
  };

  const clearCarAttributes = () => {
    setCar({
      plate: "",
      make: "",
      model: "",
      color: "",
      checkInTime: "",
      checkOutTime: "",
    });
  };

  const isPlateParked = (plate) => {
    return getItemsFromTable(LOCAL_STORAGE_KEYS.parkedCars).find(
      (car) => car.plate.toLowerCase() === plate.toLowerCase()
    );
  };

  const getCurrentTimeStamp = () => {
    return Math.floor(new Date().getTime() / 1000.0);
  };

  /**
   * When use CheckIn add a new obj to the array
   * When use CheckOut remove from the array and add CheckOutTime.
   * Keep it in the checkedOutCars array
   */

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
        checkedOutCars,
        currentlyParkedCars,
        checkInNewCar,
        clearCarAttributes,
        isPlateParked,
        setCurrentlyParkedCars,
        setCheckedOutCars,
        checkOutParkedCar,
      }}
    >
      {props.children}
    </CarContext.Provider>
  );
};
