import React, { useContext, useState } from "react";

import ChangeScreenButtons from "../components/ChangeScreenButtons";
import TableTabs from "../components/TableTabs";
import DashboardTable from "../components/DashboardTable";
import { TablesContext } from "../context/TablesContext";

function Dashboard() {
  const { shownTable, setShownTable } = useContext(TablesContext);

  // TODO(Gionave): Somehow implement a sorting system, to change the "default" item ID sorting

  return (
    <div className="bg-white  max-h-[600px] rounded-md flex flex-col  shadow-md ring-1 ring-slate-100  p-2 overflow-y-auto sm:py-6 sm:px-6 sm:max-h-2xl">
      <ChangeScreenButtons />

      {/* Table tab container */}
      <TableTabs setShownTable={setShownTable} shownTable={shownTable} />

      {/* Table container */}
      <div className="mt-4 overflow-x-auto max-w-[310px] sm:max-w-5xl">
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
