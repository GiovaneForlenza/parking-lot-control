import React, { useContext } from "react";
import { HelperContext } from "../context/HelperContext";

function TableHeader({ header, tableName }) {
  const { sortTableByAttribute } = useContext(HelperContext);
  
  // TODO(Gionave): Create Table Sorting system, somehow
  const handleClick = () => {
    sortTableByAttribute(tableName, header);
  };
  return (
    <th
      scope="col"
      // hover:bg-gray-100 select-none hover:cursor-pointer
      className="px-6 py-3 "
      key={header}
      onClick={handleClick}
    >
      {header}
    </th>
  );
}

export default TableHeader;
