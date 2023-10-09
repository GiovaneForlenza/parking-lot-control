import React, { useContext, useState } from "react";

import ChangeScreenButtons from "../components/ChangeScreenButtons";
import TableTabs from "../components/TableTabs";
import DashboardTable from "../components/DashboardTable";
import { TablesContext } from "../context/TablesContext";

function Dashboard() {
  const { shownTable, setShownTable } = useContext(TablesContext);

  // TODO(Gionave): For the checked out cars, calculate the price paid to put it on record
  // TODO(Gionave): Somehow implement a sorting system, to change the "default" item ID sorting

  return (
    <div className="bg-white   max-h-[600px] rounded-md flex flex-col  shadow-md ring-1 ring-slate-100 py-6 px-6 overflow-y-auto">
      <ChangeScreenButtons />

      {/* Table tab container */}
      <TableTabs setShownTable={setShownTable} shownTable={shownTable} />

      {/* Table container */}
      <div className="mt-4 overflow-x-auto">
        <div className="relative shadow-md sm:rounded-lg">
          <DashboardTable
            shownTable={shownTable}
            setShownTable={setShownTable}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
