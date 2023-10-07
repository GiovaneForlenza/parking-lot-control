import React, { useState } from "react";

import ChangeScreenButtons from "../components/ChangeScreenButtons";

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

  return (
    <div className="bg-white w-[1200px]  h-[600px] rounded-md flex flex-col  shadow-md ring-1 ring-slate-100 py-6 px-6 overflow-y-auto">
      <ChangeScreenButtons />
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 ">
        {tablesToShow.map((table) => {
          return (
            <li className="mr-2" key={table}>
              <button
              onClick={()=>{setShownTable(table)}}
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
              <tr className="bg-white border-b hover:bg-gray-50 text-gray-900 ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap "
                >
                  AAA-3333
                </th>
                <td className="px-6 py-4">Ford</td>
                <td className="px-6 py-4">Fiesta</td>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Thursday, March 08 | 10:35 AM</td>
                <td className="px-6 py-4">Thursday, March 08 | 12:35 PM</td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-50 text-gray-900 ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap "
                >
                  AAA-3333
                </th>
                <td className="px-6 py-4">Ford</td>
                <td className="px-6 py-4">Fiesta</td>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Thursday, March 08 | 10:35 AM</td>
                <td className="px-6 py-4">Thursday, March 08 | 12:35 PM</td>
                <td className="px-6 py-4">$15</td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-50 text-gray-900 ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap "
                >
                  AAA-3333
                </th>
                <td className="px-6 py-4">Ford</td>
                <td className="px-6 py-4">Fiesta</td>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Thursday, March 08 | 10:35 AM</td>
                <td className="px-6 py-4">Thursday, March 08 | 12:35 PM</td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-50 text-gray-900 ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap "
                >
                  AAA-3333
                </th>
                <td className="px-6 py-4">Ford</td>
                <td className="px-6 py-4">Fiesta</td>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Thursday, March 08 | 10:35 AM</td>
                <td className="px-6 py-4">Thursday, March 08 | 12:35 PM</td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-50 text-gray-900 ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap "
                >
                  AAA-3333
                </th>
                <td className="px-6 py-4">Ford</td>
                <td className="px-6 py-4">Fiesta</td>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Thursday, March 08 | 10:35 AM</td>
                <td className="px-6 py-4">Thursday, March 08 | 12:35 PM</td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-50 text-gray-900 ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap "
                >
                  AAA-3333
                </th>
                <td className="px-6 py-4">Ford</td>
                <td className="px-6 py-4">Fiesta</td>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Thursday, March 08 | 10:35 AM</td>
                <td className="px-6 py-4">Thursday, March 08 | 12:35 PM</td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-50 text-gray-900 ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap "
                >
                  AAA-3333
                </th>
                <td className="px-6 py-4">Ford</td>
                <td className="px-6 py-4">Fiesta</td>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Thursday, March 08 | 10:35 AM</td>
                <td className="px-6 py-4">Thursday, March 08 | 12:35 PM</td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-50 text-gray-900 ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap "
                >
                  AAA-3333
                </th>
                <td className="px-6 py-4">Ford</td>
                <td className="px-6 py-4">Fiesta</td>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Thursday, March 08 | 10:35 AM</td>
                <td className="px-6 py-4">Thursday, March 08 | 12:35 PM</td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-50 text-gray-900 ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap "
                >
                  AAA-3333
                </th>
                <td className="px-6 py-4">Ford</td>
                <td className="px-6 py-4">Fiesta</td>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Thursday, March 08 | 10:35 AM</td>
                <td className="px-6 py-4">Thursday, March 08 | 12:35 PM</td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-50 text-gray-900 ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap "
                >
                  AAA-3333
                </th>
                <td className="px-6 py-4">Ford</td>
                <td className="px-6 py-4">Fiesta</td>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Thursday, March 08 | 10:35 AM</td>
                <td className="px-6 py-4">Thursday, March 08 | 12:35 PM</td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-50 text-gray-900 ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap "
                >
                  AAA-3333
                </th>
                <td className="px-6 py-4">Ford</td>
                <td className="px-6 py-4">Fiesta</td>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Thursday, March 08 | 10:35 AM</td>
                <td className="px-6 py-4">Thursday, March 08 | 12:35 PM</td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-50 text-gray-900 ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap "
                >
                  AAA-3333
                </th>
                <td className="px-6 py-4">Ford</td>
                <td className="px-6 py-4">Fiesta</td>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Thursday, March 08 | 10:35 AM</td>
                <td className="px-6 py-4">Thursday, March 08 | 12:35 PM</td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-50 text-gray-900 ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap "
                >
                  AAA-3333
                </th>
                <td className="px-6 py-4">Ford</td>
                <td className="px-6 py-4">Fiesta</td>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Thursday, March 08 | 10:35 AM</td>
                <td className="px-6 py-4">Thursday, March 08 | 12:35 PM</td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-50 text-gray-900 ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap "
                >
                  AAA-3333
                </th>
                <td className="px-6 py-4">Ford</td>
                <td className="px-6 py-4">Fiesta</td>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Thursday, March 08 | 10:35 AM</td>
                <td className="px-6 py-4">Thursday, March 08 | 12:35 PM</td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-50 text-gray-900 ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap "
                >
                  AAA-3333
                </th>
                <td className="px-6 py-4">Ford</td>
                <td className="px-6 py-4">Fiesta</td>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Thursday, March 08 | 10:35 AM</td>
                <td className="px-6 py-4">Thursday, March 08 | 12:35 PM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
