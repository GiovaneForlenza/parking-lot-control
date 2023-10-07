import React, { useCallback, useContext, useEffect } from "react";

import getSortedCarMakeList, {
  getListOfCarModels,
} from "../services/carService";

import "../css/formLine.css";
import { CarContext } from "../context/CarContext";

function CheckIn() {
  const { carMakers, setCarMakers, setCar, car } = useContext(CarContext);
  useEffect(() => {
    getListOfCarModels();
    getSortedCarMakeList().then((data) => {
      setCarMakers(data);
    });
  }, []);

  const handleMakeChange = (make) => {
    setCar({ ...car, make: make.target.value });
    
  };

  return (
    <div>
      {/* Content container */}
      <div className="w-full ">
        {/* Form container */}
        <div className=" px-20 mt-4">
          <form action="" className="p-4 shadow ">
            <div className="text-center text-sm font-mono">
              Check in a new car
            </div>

            {/* Car Plate */}
            <div className="user-input-wrp">
              <br />
              <input type="text" className="inputText px-1 border-2" required />
              <span className="floating-label">Car Plate</span>
            </div>
            {/* Car Make */}
            <div className="mt-8 flex pb-2 justify-center items-center">
              <label htmlFor="" className=" w-28">
                Car Make
              </label>
              <select
                name=""
                id=""
                className="w-full p-1"
                onChange={(event) => handleMakeChange(event)}
              >
                <option value="">
                  Select a car make
                </option>
                {carMakers.map((make) => {
                  return (
                    <option value={make} key={make}>
                      {make}
                    </option>
                  );
                })}
              </select>
            </div>
            {car.make !== "" ? (
              <div className="mt-8 flex pb-2 justify-center items-center">
                <label htmlFor="" className=" w-28">
                  Car Model
                </label>
                <select name="" id="" className="w-full p-1">
                  <option value="" disabled>
                    Select a car Model
                  </option>
                  <option value="">Ford</option>
                  <option value="">Ram</option>
                  <option value="">Toyota</option>
                  <option value="">Lexus</option>
                </select>
              </div>
            ) : null}
            {/* Button Submit */}
            <div className=" mt-4 flex items-center justify-center">
              <button
                type="button"
                className=" px-4 h-10 bg-sky-200 rounded-md hover:bg-sky-300"
              >
                Check in Vehicle
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CheckIn;
