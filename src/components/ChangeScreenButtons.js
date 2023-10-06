import React, { useContext } from "react";
import { DisplayPageContext } from "../context/DisplayPageContext";

function ChangeScreenButtons() {
  const { displayPage, setDisplayPage } = useContext(DisplayPageContext);
  const handleClick = (page) => {
    setDisplayPage(page);
  };
  return (
    <div className="flex items-center justify-between mb-4  px-10 ">
      <button
        onClick={() => handleClick("CheckIn")}
        className={`${displayPage === "CheckIn" ? "text-blue-600" : null}`}
      >
        Check In
      </button>{" "}
      |
      <button
        onClick={() => handleClick("CheckOut")}
        className={`${displayPage === "CheckOut" ? "text-blue-600" : null}`}
      >
        Check Out
      </button>{" "}
      |
      <button
        onClick={() => handleClick("Dashboard")}
        className={`${displayPage === "Dashboard" ? "text-blue-600" : null}`}
      >
        Dashboard
      </button>
    </div>
  );
}

export default ChangeScreenButtons;
