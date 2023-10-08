import React from "react";

function TableTabs({  setShownTable, shownTable }) {
  const tablesToShow = ["Parked cars", "All cars"];
  return (
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
  );
}

export default TableTabs;
