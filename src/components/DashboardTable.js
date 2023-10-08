import React, { useContext, useState } from "react";
import TableHeader from "./TableHeader";
import TableLines from "./TableLines";

import { CarContext } from "../context/CarContext";

function DashboardTable({ shownTable }) {
  const tableHeaderParkedCars = [
    "Car plate",
    "Car make",
    "Car model",
    "Car color",
    "Check in time",
  ];
  const tableHeaderAllCars = ["Check out time", "hours parked", "Amount paid"];
  const { allParkedCars, currentlyParkedCars } = useContext(CarContext);
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
        <tr>
          {tableHeaderParkedCars.map((item, id) => {
            return <TableHeader header={item} key={id} />;
          })}
          {shownTable === "All cars"
            ? tableHeaderAllCars.map((item, id) => {
                return <TableHeader header={item} key={id} />;
              })
            : null}
        </tr>
      </thead>
      <tbody>
        {shownTable === "Parked cars"
          ? currentlyParkedCars.map((car) => {
              return (
                <TableLines car={car} shownTable={shownTable} id={car.plate} />
              );
            })
          : allParkedCars.map((car) => {
              return (
                <TableLines car={car} shownTable={shownTable} id={car.plate} />
              );
            })}
      </tbody>
    </table>
  );
}

export default DashboardTable;
