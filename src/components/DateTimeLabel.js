import React, { useEffect, useState } from "react";
import { DateTime } from "luxon";

function DateTimeLabel() {
  const [currentDT, setCurrentDT] = useState("a");

  const getDateTime = () => {
    setCurrentDT(DateTime.now().toFormat("cccc dd MMM yyyy | hh:mm a"));
  };

  function updateTime() {
    setInterval(getDateTime, 1000 * 60);
  }
  useEffect(() => {
    getDateTime();
    updateTime();
  }, []);

  return <div className="text-center">{currentDT}</div>;
}

export default DateTimeLabel;
