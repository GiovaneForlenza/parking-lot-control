import React from 'react'

function TableHeader({header}) {
  return (
    <th scope="col" className="px-6 py-3" key={header}>
      {header}
    </th>
  );
}

export default TableHeader