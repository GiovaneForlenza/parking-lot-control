import React, { useState, useContext, useEffect } from "react";

import getSortedCarMakeList from "../services/carService";

import "../css/formLine.css";
import { CarContext } from "../context/CarContext";
import { HelperContext } from "../context/HelperContext";
import { ToastContainer, toast } from "react-toastify";

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
    checkInNewCar,
    clearCarAttributes,
  } = useContext(CarContext);

  const { toastAtt } = useContext(HelperContext);

  const [errorChecking, setErrorChecking] = useState({
    plate: false,
    make: false,
    model: false,
    color: false,
  });

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

  const handleCarCheckIn = () => {
    // TODO(Gionave): Check if the plate is valid, based on a format
    setErrorChecking({
      plate: car.plate.length === 0,
      make: car.make.length === 0,
      model: car.model.length === 0,
      color: car.color.length === 0,
    });
    if (
      car.plate.length === 0 ||
      car.make.length === 0 ||
      car.model.length === 0 ||
      car.color.length === 0
    ) {
      return;
    }

    const success = checkInNewCar();

    if (success) {
      toast.success("The vehicle was checked in", toastAtt);
    } else {
      toast.error("The vehicle is already checked in", toastAtt);
    }

    document.getElementById("carPlateInput").value = "";
    document.getElementById("selectCarMake").value = "";
  };

  // TODO(Gionave): Create a 'Previously parked' table, and if that plate is put automatically add the car's info

  return (
    <div>
      <ToastContainer />
      {/* Content container */}
      <div className="w-full ">
        {/* Form container */}
        <div className="p-2 mt-4 sm:px-20">
          <form
            action=""
            className="p-4 shadow"
            onSubmit={(e) => {
              e.preventDefault();
              handleCarCheckIn();
            }}
          >
            <div className="text-center text-sm font-mono">
              Check in a new car
            </div>

            {/* Car Plate */}
            <div className="">
              {/* INPUT */}
              <div className="user-input-wrp">
                <br />
                <input
                  type="text"
                  id="carPlateInput"
                  className="inputText px-1 border-2"
                  required
                  onChange={(event) => {
                    handlePlateUpdate(event);
                  }}
                />
                <span className="floating-label">Car Plate</span>
              </div>
              {/* ERROR */}
              <div
                className={`text-sm text-red-600 font-semibold ${
                  errorChecking.plate ? "inline-block" : "hidden"
                }`}
              >
                The car plate is a required field!
              </div>
            </div>
            {/* Car Make */}
            <div className="">
              {/* SELECT */}
              <div className="mt-8 flex pb-2 justify-center items-center">
                <label htmlFor="" className=" w-28">
                  Car Make
                </label>
                <select
                  name=""
                  id="selectCarMake"
                  className="w-full p-1 select-none rounded-md border border-black hover:cursor-pointer"
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
              {/* ERROR */}
              <div
                className={`text-sm text-red-600 font-semibold ${
                  errorChecking.make === true ? "block" : "hidden"
                }`}
              >
                The car make is a required field!
              </div>
            </div>
            {/* Car Model, Color and Button conditional */}
            {car.make !== "" ? (
              <div className="">
                {/* Car Model */}
                <div className="">
                  {/* SELECT */}
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
                  {/* ERROR */}
                  <div
                    className={`text-sm text-red-600 font-semibold ${
                      errorChecking.model === true ? "block" : "hidden"
                    }`}
                  >
                    The car model is a required field!
                  </div>
                  {/* SPAN */}
                  <div className="text-xs text-slate-400 select-none">
                    *Not all car models are available, this project is using a
                    demo API
                  </div>
                </div>
                {/* Color */}
                <div className="mt-8 sm:m-0">
                  {/* COLOR SELECTION */}
                  <div className=" flex pb-2 flex-col sm:justify-center sm:items-start sm:flex-row sm:mt-8">
                    <div className="mb-4 sm:w-28 sm:mb-0">Color</div>
                    <div className="w-full grid grid-cols-5 grid-rows-2 gap-2">
                      {carColorList.map((color) => {
                        return (
                          <div
                            className={`rounded-sm flex flex-col items-center transition-all hover:cursor-pointer hover:scale-105 p-1${
                              car.color === color.name ? "shadow-lg" : ""
                            }`}
                            key={color.hex}
                            onClick={() => {
                              handleColorClick(color.name);
                            }}
                          >
                            <div
                              style={{ backgroundColor: `${color.hex}` }}
                              className={`w-8 h-8  rounded-full shadow-sm border  ${
                                car.color === color.name
                                  ? "border-[3px] border-blue-800 shadow-sm"
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
                  {/* ERROR */}
                  <div
                    className={`text-sm text-red-600 font-semibold ${
                      errorChecking.color === true ? "block" : "hidden"
                    }`}
                  >
                    The car color is a required field!
                  </div>
                </div>

                {/* Button Submit */}
                <div className=" mt-4 flex items-center justify-center">
                  <button
                    type="button"
                    className=" px-4 h-10 bg-sky-200 rounded-md hover:bg-sky-300"
                    onClick={handleCarCheckIn}
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
