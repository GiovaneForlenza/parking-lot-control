import React from "react";

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
  return (
    <div className="bg-white w-[1200px]  h-[600px] rounded-md flex flex-col  shadow-md ring-1 ring-slate-100 py-6 px-6 overflow-y-auto">
      <ChangeScreenButtons />
      <div className="mt-8">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                {tableHeader.map((item) => {
                  return (
                    <th scope="col" class="px-6 py-3" key={item}>
                      {item}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b hover:bg-gray-50 text-gray-900 ">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium whitespace-nowrap "
                >
                  AAA-3333
                </th>
                <td class="px-6 py-4">Ford</td>
                <td class="px-6 py-4">Fiesta</td>
                <td class="px-6 py-4">Silver</td>
                <td class="px-6 py-4">Thursday, March 08 | 10:35 AM</td>
                <td class="px-6 py-4">Thursday, March 08 | 12:35 PM</td>
              </tr>
              <tr class="bg-white border-b hover:bg-gray-50 text-gray-900 ">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium whitespace-nowrap "
                >
                  AAA-3333
                  
                </th>
                <td class="px-6 py-4">Ford</td>
                <td class="px-6 py-4">Fiesta</td>
                <td class="px-6 py-4">Silver</td>
                <td class="px-6 py-4">Thursday, March 08 | 10:35 AM</td>
                <td class="px-6 py-4">Thursday, March 08 | 12:35 PM</td>
                <td class="px-6 py-4">$15</td>
              </tr>
              <tr class="bg-white border-b hover:bg-gray-50 text-gray-900 ">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium whitespace-nowrap "
                >
                  AAA-3333
                </th>
                <td class="px-6 py-4">Ford</td>
                <td class="px-6 py-4">Fiesta</td>
                <td class="px-6 py-4">Silver</td>
                <td class="px-6 py-4">Thursday, March 08 | 10:35 AM</td>
                <td class="px-6 py-4">Thursday, March 08 | 12:35 PM</td>
              </tr>
              <tr class="bg-white border-b hover:bg-gray-50 text-gray-900 ">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium whitespace-nowrap "
                >
                  AAA-3333
                </th>
                <td class="px-6 py-4">Ford</td>
                <td class="px-6 py-4">Fiesta</td>
                <td class="px-6 py-4">Silver</td>
                <td class="px-6 py-4">Thursday, March 08 | 10:35 AM</td>
                <td class="px-6 py-4">Thursday, March 08 | 12:35 PM</td>
              </tr>
              <tr class="bg-white border-b hover:bg-gray-50 text-gray-900 ">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium whitespace-nowrap "
                >
                  AAA-3333
                </th>
                <td class="px-6 py-4">Ford</td>
                <td class="px-6 py-4">Fiesta</td>
                <td class="px-6 py-4">Silver</td>
                <td class="px-6 py-4">Thursday, March 08 | 10:35 AM</td>
                <td class="px-6 py-4">Thursday, March 08 | 12:35 PM</td>
              </tr>
              <tr class="bg-white border-b hover:bg-gray-50 text-gray-900 ">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium whitespace-nowrap "
                >
                  AAA-3333
                </th>
                <td class="px-6 py-4">Ford</td>
                <td class="px-6 py-4">Fiesta</td>
                <td class="px-6 py-4">Silver</td>
                <td class="px-6 py-4">Thursday, March 08 | 10:35 AM</td>
                <td class="px-6 py-4">Thursday, March 08 | 12:35 PM</td>
              </tr>
              <tr class="bg-white border-b hover:bg-gray-50 text-gray-900 ">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium whitespace-nowrap "
                >
                  AAA-3333
                </th>
                <td class="px-6 py-4">Ford</td>
                <td class="px-6 py-4">Fiesta</td>
                <td class="px-6 py-4">Silver</td>
                <td class="px-6 py-4">Thursday, March 08 | 10:35 AM</td>
                <td class="px-6 py-4">Thursday, March 08 | 12:35 PM</td>
              </tr>
              <tr class="bg-white border-b hover:bg-gray-50 text-gray-900 ">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium whitespace-nowrap "
                >
                  AAA-3333
                </th>
                <td class="px-6 py-4">Ford</td>
                <td class="px-6 py-4">Fiesta</td>
                <td class="px-6 py-4">Silver</td>
                <td class="px-6 py-4">Thursday, March 08 | 10:35 AM</td>
                <td class="px-6 py-4">Thursday, March 08 | 12:35 PM</td>
              </tr>
              <tr class="bg-white border-b hover:bg-gray-50 text-gray-900 ">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium whitespace-nowrap "
                >
                  AAA-3333
                </th>
                <td class="px-6 py-4">Ford</td>
                <td class="px-6 py-4">Fiesta</td>
                <td class="px-6 py-4">Silver</td>
                <td class="px-6 py-4">Thursday, March 08 | 10:35 AM</td>
                <td class="px-6 py-4">Thursday, March 08 | 12:35 PM</td>
              </tr>
              <tr class="bg-white border-b hover:bg-gray-50 text-gray-900 ">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium whitespace-nowrap "
                >
                  AAA-3333
                </th>
                <td class="px-6 py-4">Ford</td>
                <td class="px-6 py-4">Fiesta</td>
                <td class="px-6 py-4">Silver</td>
                <td class="px-6 py-4">Thursday, March 08 | 10:35 AM</td>
                <td class="px-6 py-4">Thursday, March 08 | 12:35 PM</td>
              </tr>
              <tr class="bg-white border-b hover:bg-gray-50 text-gray-900 ">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium whitespace-nowrap "
                >
                  AAA-3333
                </th>
                <td class="px-6 py-4">Ford</td>
                <td class="px-6 py-4">Fiesta</td>
                <td class="px-6 py-4">Silver</td>
                <td class="px-6 py-4">Thursday, March 08 | 10:35 AM</td>
                <td class="px-6 py-4">Thursday, March 08 | 12:35 PM</td>
              </tr>
              <tr class="bg-white border-b hover:bg-gray-50 text-gray-900 ">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium whitespace-nowrap "
                >
                  AAA-3333
                </th>
                <td class="px-6 py-4">Ford</td>
                <td class="px-6 py-4">Fiesta</td>
                <td class="px-6 py-4">Silver</td>
                <td class="px-6 py-4">Thursday, March 08 | 10:35 AM</td>
                <td class="px-6 py-4">Thursday, March 08 | 12:35 PM</td>
              </tr>
              <tr class="bg-white border-b hover:bg-gray-50 text-gray-900 ">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium whitespace-nowrap "
                >
                  AAA-3333
                </th>
                <td class="px-6 py-4">Ford</td>
                <td class="px-6 py-4">Fiesta</td>
                <td class="px-6 py-4">Silver</td>
                <td class="px-6 py-4">Thursday, March 08 | 10:35 AM</td>
                <td class="px-6 py-4">Thursday, March 08 | 12:35 PM</td>
              </tr>
              <tr class="bg-white border-b hover:bg-gray-50 text-gray-900 ">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium whitespace-nowrap "
                >
                  AAA-3333
                </th>
                <td class="px-6 py-4">Ford</td>
                <td class="px-6 py-4">Fiesta</td>
                <td class="px-6 py-4">Silver</td>
                <td class="px-6 py-4">Thursday, March 08 | 10:35 AM</td>
                <td class="px-6 py-4">Thursday, March 08 | 12:35 PM</td>
              </tr>
              <tr class="bg-white border-b hover:bg-gray-50 text-gray-900 ">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium whitespace-nowrap "
                >
                  AAA-3333
                </th>
                <td class="px-6 py-4">Ford</td>
                <td class="px-6 py-4">Fiesta</td>
                <td class="px-6 py-4">Silver</td>
                <td class="px-6 py-4">Thursday, March 08 | 10:35 AM</td>
                <td class="px-6 py-4">Thursday, March 08 | 12:35 PM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
