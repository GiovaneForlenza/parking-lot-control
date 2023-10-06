import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { useContext } from "react";
import { DisplayPageContext } from "./context/DisplayPageContext";

function App() {
  const { displayPage } = useContext(DisplayPageContext);
  return (
    // Main container
    <div className="border h-screen flex items-center justify-center bg-sky-50">
      {/* Content container */}
      <div className="">
        {displayPage === "CheckIn" || displayPage === "CheckOut" ? (
          <Home />
        ) : (
          <Dashboard />
        )}
      </div>
    </div>
  );
}

export default App;
