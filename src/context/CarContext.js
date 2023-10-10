import React, { useState, createContext, useContext } from "react";
import { getListOfCarModels } from "../services/carService";
import "react-toastify/dist/ReactToastify.css";
import { TablesContext } from "./TablesContext";

export const CarContext = createContext();

export const CarContextProvider = (props) => {
  const {
    currentlyParkedCars,
    setCurrentlyParkedCars,
    checkedOutCars,
    setCheckedOutCars,
  } = useContext(TablesContext);

  const [car, setCar] = useState({
    plate: "a",
    make: "a",
    model: "a",
    color: "Red",
    checkInTime: 0,
    checkOutTime: 0,
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

  // TODO(Gionave): Move the checkedOutCars and currentlyParked cars to the TableContext, since it's related to the table, and not to the car itself
  // TODO(Gionave): Switch from 'All parked cars', to 'Previously checked out cars', since it'll be easier to deal with shit that's to come

  const checkInNewCar = () => {
    // const date = getCurrentTimeStamp();
    // setCar({ ...car, checkInTime: date });
    // setCurrentlyParkedCars([
    //   ...currentlyParkedCars,
    //   {
    //     plate: car.plate,
    //     make: car.make,
    //     model: car.model,
    //     color: car.color,
    //     checkInTime: car.checkInTime,
    //   },
    // ]);
    // clearCarAttributes();
  };

  const addCheckedOutCarToArray = (car) => {
    // const date = getCurrentTimeStamp();
    // setCar({ ...car, checkOutTime: date });
    // setCheckedOutCars([...checkedOutCars, { car }]);
    // console.log(car);
    // console.log(checkedOutCars);
  };

  // FIXME(Gionave): FIX ADD CHECKED OUT CAR TO ARRAY
  const checkOutParkedCar = (plate) => {
    // const car = isPlateParked(plate);
    // if (car) {
    //   const updatedCarList = currentlyParkedCars.filter((parkedCar) => {
    //     return parkedCar.plate !== car.plate;
    //   });
    //   setCurrentlyParkedCars(updatedCarList);
    //   checkedOutCars.map((parkedCar) => {
    //     if (parkedCar.plate === car.plate) {
    //       setCheckedOutCars({
    //         ...parkedCar,
    //         timeCheckOut: getCurrentTimeStamp,
    //       });
    //     }
    //   });
    //   // FIXME(Gionave): Add checked out car to the other table, with the current DT for price calculation
    //   addCheckedOutCarToArray(car);
    //   return true;
    // } else {
    //   return false;
    // }
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
    return currentlyParkedCars.find(
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
