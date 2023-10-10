import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { DisplayPageContextProvider } from "./context/DisplayPageContext";
import { CarContextProvider } from "./context/CarContext";
import { HelperContextProvider } from "./context/HelperContext";
import { TablesContextProvider } from "./context/TablesContext";
import { LocalStorageContextProvider } from "./context/LocalStorageContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LocalStorageContextProvider>
      <DisplayPageContextProvider>
        <TablesContextProvider>
          <CarContextProvider>
            <HelperContextProvider>
              <App />
            </HelperContextProvider>
          </CarContextProvider>
        </TablesContextProvider>
      </DisplayPageContextProvider>
    </LocalStorageContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
