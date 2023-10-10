import React, { useContext, useState, useEffect } from "react";
import CheckIn from "./CheckIn";
import { CarContextProvider } from "../context/CarContext";
import DateTimeLabel from "../components/DateTimeLabel";
import CheckOut from "./CheckOut";
import ChangeScreenButtons from "../components/ChangeScreenButtons";
import { DisplayPageContext } from "../context/DisplayPageContext";
import { LocalStorageContext } from "../context/LocalStorageContext";
import { TablesContext } from "../context/TablesContext";

function Home() {
  const { displayPage } = useContext(DisplayPageContext);
  const { createInitialTables } = useContext(LocalStorageContext);
  const { checkedOutCars, currentlyParkedCars } = useContext(TablesContext);

  useEffect(() => {
    if (localStorage.getItem("parkedCars") === null) {
      createInitialTables(currentlyParkedCars, checkedOutCars);
    } else {
      console.log("tables created");
    }
  }, []);

  return (
    <div className="bg-white w-[600px]  rounded-md flex flex-col  shadow-md ring-1 ring-slate-100 py-6 px-6 ">
      <ChangeScreenButtons />
      <DateTimeLabel />
      {displayPage === "Check in" ? <CheckIn /> : <CheckOut />}
    </div>
  );
}

export default Home;
