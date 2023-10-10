import React, { useContext, useState } from "react";
import TableHeader from "./TableHeader";
import TableLines from "./TableLines";

import { CarContext } from "../context/CarContext";
import {
  LOCAL_STORAGE_KEYS,
  LocalStorageContext,
} from "../context/LocalStorageContext";

function DashboardTable({ shownTable }) {
  const tableHeaderParkedCars = [
    "Car plate",
    "Car make",
    "Car model",
    "Car color",
    "Check in time",
  ];
  const tableHeaderAllCars = ["Check out time", "hours parked", "Amount paid"];
  const { checkedOutCars, currentlyParkedCars } = useContext(CarContext);
  const { getItemsFromTable } = useContext(LocalStorageContext);

  // const renderSwitchTable = () => {
  //   switch (shownTable) {
  //     case "Parked cars":
  //       currentlyParkedCars.map((car) => {
  //         return <TableLines car={car} shownTable={shownTable} key={car.id} />;
  //       });

  //     case "All cars":
  //       checkedOutCars.map((car) => {
  //         return <TableLines car={car} shownTable={shownTable} key={car.id} />;
  //       });
  //   }
  // };
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 sortable">
      <thead className="text-xs text-gray-700 uppercase  bg-gray-50 ">
        <tr>
          {tableHeaderParkedCars.map((item, id) => {
            return (
              <TableHeader header={item} key={id} tableName={"parkedCars"} />
            );
          })}
          {shownTable === "Checked out cars"
            ? tableHeaderAllCars.map((item, id) => {
                return (
                  <TableHeader header={item} key={id} tableName={"allCars"} />
                );
              })
            : null}
        </tr>
      </thead>
      <tbody>
        {shownTable === "Parked cars"
          ? getItemsFromTable(LOCAL_STORAGE_KEYS.parkedCars).map((car) => {
              return (
                <TableLines car={car} shownTable={shownTable} key={car.id} />
              );
            })
          : getItemsFromTable(LOCAL_STORAGE_KEYS.checkedOutCars).map((car) => {
              return (
                <TableLines car={car} shownTable={shownTable} key={car.id} />
              );
            })}
      </tbody>
    </table>
  );
}

export default DashboardTable;
