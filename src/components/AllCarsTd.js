import React, { useContext } from "react";
import { HelperContext } from "../context/HelperContext";
import { calculateTotalParkedTime } from "../context/HelperContext";
function AllCarsTd({ tdToShow, checkOutTime, checkInTime }) {
  const { getFormattedTimeFromDT, getCalculatedPriceToPay } =
    useContext(HelperContext);

  switch (tdToShow) {
    case "checkOut":
      return (
        <td className="px-6 py-4" key={tdToShow}>
          {checkOutTime !== "" ? getFormattedTimeFromDT(checkOutTime) : null}
        </td>
      );
    case "time":
      if (checkOutTime !== "") {
        return (
          <td className="px-6 py-4" key={tdToShow}>
            {calculateTotalParkedTime(checkInTime, checkOutTime)}{" "}
            {calculateTotalParkedTime(checkInTime, checkOutTime) > 1
              ? "hours"
              : "hour"}
          </td>
        );
      } else {
        return (
          <td className="px-6 py-4" key={tdToShow}>
            Car is still parked
          </td>
        );
      }
    case "price":
      if (checkOutTime !== "")
        return (
          <td className="px-6 py-4" key={tdToShow}>
            <div className="p-1 box-border rounded-md text-center bg-[#F0FDF4] text-[#15803D] font-semibold">
              {getCalculatedPriceToPay(checkInTime, checkOutTime)}
            </div>
          </td>
        );
  }
}

export default AllCarsTd;
