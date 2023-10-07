import React, { useCallback, useContext, useEffect } from "react";

import getSortedCarMakeList, {
  getListOfCarModels,
} from "../services/carService";

import "../css/formLine.css";
import { CarContext } from "../context/CarContext";

function CheckIn() {
  const {
    carMakers,
    setCarMakers,
    setCar,
    car,
    fetchAllCarModels,
    getListOfModelsFromMake,
    carModelsFromMake,
    carColorList,
  } = useContext(CarContext);

  useEffect(() => {
    fetchAllCarModels();
    getSortedCarMakeList().then((data) => {
      setCarMakers(data);
    });
  }, []);

  const handlePlateUpdate = (plate) => {
    setCar({ ...car, plate: plate.target.value });
  };

  const handleChangeCarMakeSelection = (make) => {
    let makeName = make.target.value;
    setCar({ ...car, make: makeName });
    getListOfModelsFromMake(makeName);
  };

  const handleChangeCarModelSelection = (model) => {
    setCar({ ...car, model: model.target.value });
  };
  const handleColorClick = (color) => {
    setCar({ ...car, color: color });
  };

  const handleButtonClick = () => {
    if (
      car.make === "" ||
      car.plate === "" ||
      car.model === "" ||
      car.color === ""
    ) {
      console.log("FALSE");
    } else {
      console.log("true");
    }
    console.log(car)
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
              <input
                type="text"
                className="inputText px-1 border-2"
                required
                onChange={(event) => {
                  handlePlateUpdate(event);
                }}
              />
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
                className="w-full p-1 select-none"
                onChange={(event) => handleChangeCarMakeSelection(event)}
              >
                <option value="">Select a car make</option>
                {carMakers.map((make) => {
                  return (
                    <option value={make} key={make}>
                      {make}
                    </option>
                  );
                })}
              </select>
            </div>
            {/* Car Model, Color and Button conditional */}
            {car.make !== "" ? (
              <div className="">
                {/* Car Model */}
                <div className="mt-8 flex pb-2 justify-center items-center">
                  <label htmlFor="carModels" className="w-28">
                    Car Model
                  </label>
                  <select
                    name="carModels"
                    id="carModels"
                    className="w-full p-1 select-none"
                    onChange={(event) => {
                      handleChangeCarModelSelection(event);
                    }}
                  >
                    <option value="">Select a car Model</option>
                    {carModelsFromMake.map((model) => {
                      return (
                        <option value={model} key={model}>
                          {model}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="text-xs text-slate-400 select-none">
                  *Not all car models are available, this project is using a
                  demo API
                </div>

                {/* Color */}
                <div className="mt-8 flex pb-2 justify-center items-center">
                  <div className="w-28">Color</div>
                  <div className="w-full  grid grid-cols-5 grid-rows-2 gap-2">
                    {carColorList.map((color) => {
                      return (
                        <div
                          className={`rounded-sm flex flex-col items-center transition-all hover:cursor-pointer hover:scale-105 ${
                            car.color === color.name ? "shadow-lg" : ""
                          }`}
                          key={color.hex}
                          onClick={() => {
                            handleColorClick(color.name);
                          }}
                        >
                          <div
                            className={`w-8 h-8  rounded-full bg-[#${
                              color.hex
                            }] shadow-sm border ${
                              car.color === color.name
                                ? "border-[3px] border-blue-800"
                                : ""
                            }`}
                          ></div>
                          <div className="text-sm select-none">
                            {color.name}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Button Submit */}
                <div className=" mt-4 flex items-center justify-center">
                  <button
                    type="button"
                    className=" px-4 h-10 bg-sky-200 rounded-md hover:bg-sky-300"
                    onClick={handleButtonClick}
                  >
                    Check in Vehicle
                  </button>
                </div>
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
}

export default CheckIn;
