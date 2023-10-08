import React, { useContext } from "react";
import { HelperContext } from "../context/HelperContext";
import { calculateTotalParkedTime } from "../context/HelperContext";
function AllCarsTd({ tdToShow, checkOutTime, checkInTime }) {
  const { getFormattedTimeFromDT, getCalculatedPriceToPay } =
    useContext(HelperContext);

  switch (tdToShow) {
    case "checkOut":
      return (
        <td className="px-6 py-4">
          {checkOutTime !== "" ? getFormattedTimeFromDT(checkOutTime) : null}
        </td>
      );
    case "time":
      if (checkOutTime !== "") {
        return (
          <td className="px-6 py-4">
            {calculateTotalParkedTime(checkInTime, checkOutTime)} hours
          </td>
        );
      } else {
        return <td className="px-6 py-4">Car is still parked</td>;
      }
    case "price":
      if (checkOutTime !== "")
        return (
          <td className="px-6 py-4">
            <div className="p-1 box-border rounded-full text-center bg-[#DBF7E4] text-[#31A751] font-semibold">
              {getCalculatedPriceToPay(checkInTime, checkOutTime)}
            </div>
          </td>
        );
  }
}

export default AllCarsTd;
