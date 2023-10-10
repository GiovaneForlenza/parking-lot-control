import React, { useState, createContext } from "react";

export const TablesContext = createContext();

export const TablesContextProvider = (props) => {
  const [shownTable, setShownTable] = useState("Parked cars");
  const [checkedOutCars, setCheckedOutCars] = useState([
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
  ]);
  const [currentlyParkedCars, setCurrentlyParkedCars] = useState([
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
  ]);
  return (
    <TablesContext.Provider
      value={{
        shownTable,
        setShownTable,
        checkedOutCars,
        setCheckedOutCars,
        currentlyParkedCars,
        setCurrentlyParkedCars,
      }}
    >
      {props.children}
    </TablesContext.Provider>
  );
};
