import React, { useContext } from "react";
import { DisplayPageContext } from "../context/DisplayPageContext";

function ChangeScreenButtons() {
  const { displayPage, setDisplayPage } = useContext(DisplayPageContext);
  const handleClick = (page) => {
    setDisplayPage(page);
  };

  const tabs = ["Check in", "Check out", "Dashboard"];
  return (
    <div className="flex items-center justify-center mb-4 ">
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 w-full">
        <ul className="flex flex-wrap -mb-px">
          {tabs.map((tab) => {
            return (
              <li className="mr-2" key={tab}>
                <button
                  href="#"
                  className={`inline-block p-4 border-b-2  rounded-t-lg  ${
                    displayPage === tab
                      ? "text-blue-600 border-blue-600 rounded-t-lg active"
                      : "border-transparent hover:text-gray-600 hover:border-gray-300"
                  }`}
                  onClick={() => handleClick(tab)}
                >
                  {tab}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ChangeScreenButtons;
