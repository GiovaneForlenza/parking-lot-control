import React, { useContext } from "react";
import { CarContext } from "../context/CarContext";
import { HelperContext } from "../context/HelperContext";

import AllCarsTd from "./AllCarsTd";

function TableLines({ car, shownTable }) {
  const { carColorList } = useContext(CarContext);
  const { getFormattedTimeFromDT } = useContext(HelperContext);
  return (
    <tr
      className="bg-white border-b hover:bg-gray-50 text-gray-900 "
      key={car.plate}
    >
      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap ">
        {car.plate}
      </th>
      <td className="px-6 py-4">{car.make}</td>
      <td className="px-6 py-4">{car.model}</td>
      <td className="px-6 py-4">
        {carColorList.map((item, id) => {
          if (item.name === car.color) {
            return (
              <div
                key={id}
                style={{
                  backgroundColor: `${item.hex}`,
                }}
                className={`w-8 h-8  rounded-full shadow-sm border`}
              ></div>
            );
          }
        })}
      </td>
      <td className="px-6 py-4">{getFormattedTimeFromDT(car.checkInTime)}</td>
      {shownTable === "Checked out cars"
        ? [
            <AllCarsTd tdToShow={"checkOut"} checkOutTime={car.checkOutTime} />,
            <AllCarsTd
              tdToShow={"time"}
              checkInTime={car.checkInTime}
              checkOutTime={car.checkOutTime}
            />,
            <AllCarsTd
              tdToShow={"price"}
              checkInTime={car.checkInTime}
              checkOutTime={car.checkOutTime}
            />,
          ]
        : null}
    </tr>
  );
}

export default TableLines;
