import React, { useContext, useState } from "react";

import ChangeScreenButtons from "../components/ChangeScreenButtons";
import { CarContext } from "../context/CarContext";
import { HelperContext } from "../context/HelperContext";

function Dashboard() {
  const tableHeader = [
    "Car plate",
    "Car make",
    "Car model",
    "Car color",
    "Check in time",
    "Check out time",
    "Amount paid",
  ];

  const tablesToShow = ["Parked cars", "All cars"];
  const [shownTable, setShownTable] = useState("Parked cars");
  const { allParkedCars, carColorList } = useContext(CarContext);
  const { getFormattedTimeFromDT } = useContext(HelperContext);

  return (
    <div className="bg-white w-[1200px]  h-[600px] rounded-md flex flex-col  shadow-md ring-1 ring-slate-100 py-6 px-6 overflow-y-auto">
      <ChangeScreenButtons />

      {/* Table tab container */}
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 ">
        {tablesToShow.map((table) => {
          return (
            <li className="mr-2" key={table}>
              <button
                onClick={() => {
                  setShownTable(table);
                }}
                className={`inline-block p-4  rounded-t-lg active ${
                  shownTable === table
                    ? "text-blue-600 bg-gray-100"
                    : " hover:text-gray-600 hover:bg-gray-50 "
                }`}
              >
                {table}
              </button>
            </li>
          );
        })}
      </ul>

      {/* Table container */}
      <div className="mt-4">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                {tableHeader.map((item) => {
                  return (
                    <th scope="col" className="px-6 py-3" key={item}>
                      {item}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {allParkedCars.map((car) => {
                return (
                  <tr className="bg-white border-b hover:bg-gray-50 text-gray-900 ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium whitespace-nowrap "
                    >
                      {car.plate}
                    </th>
                    <td className="px-6 py-4">{car.make}</td>
                    <td className="px-6 py-4">{car.model}</td>
                    <td className="px-6 py-4">
                      {carColorList.map((item) => {
                        if (item.name === car.color) {
                          return (
                            <div
                              style={{
                                backgroundColor: `${item.hex}`,
                              }}
                              className={`w-8 h-8  rounded-full shadow-sm border`}
                            ></div>
                          );
                        }
                      })}
                    </td>
                    <td className="px-6 py-4">
                      {getFormattedTimeFromDT(car.checkInTime)}
                    </td>
                    <td className="px-6 py-4">
                      {car.checkOutTime !== ""
                        ? getFormattedTimeFromDT(car.checkOutTime)
                        : null}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
