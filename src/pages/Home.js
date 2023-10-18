import React, { useContext, useState, useEffect } from "react";
import CheckIn from "./CheckIn";
import { CarContextProvider } from "../context/CarContext";
import DateTimeLabel from "../components/DateTimeLabel";
import CheckOut from "./CheckOut";
import ChangeScreenButtons from "../components/ChangeScreenButtons";
import { DisplayPageContext } from "../context/DisplayPageContext";
import {
  LOCAL_STORAGE_KEYS,
  LocalStorageContext,
} from "../context/LocalStorageContext";
import { TablesContext } from "../context/TablesContext";

function Home() {
  const { displayPage } = useContext(DisplayPageContext);
  const { createInitialTables, getItemsFromTable } =
    useContext(LocalStorageContext);
  const { checkedOutCars, currentlyParkedCars } = useContext(TablesContext);

  useEffect(() => {
    if (!localStorage.getItem(LOCAL_STORAGE_KEYS.parkedCars)) {
      createInitialTables(currentlyParkedCars, checkedOutCars);
    }
  }, []);

  return (
    <div className="bg-white max-w-2xl min-w-xl rounded-md flex flex-col  shadow-md ring-1 ring-slate-100 sm:p-6">
      <ChangeScreenButtons />
      <DateTimeLabel />
      {displayPage === "Check in" ? <CheckIn /> : <CheckOut />}
    </div>
  );
}

export default Home;
