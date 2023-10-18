import React, { useState, useContext } from "react";
import { CarContext } from "../context/CarContext";
import { ToastContainer, toast } from "react-toastify";

function CheckOut() {
  const [plate, setPlate] = useState("");
  const { checkOutParkedCar } = useContext(CarContext);

  const handleCarCheckout = () => {
    if (checkOutParkedCar(plate)) {
      toast.success("The vehicle was checked out", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
      document.getElementById("carPlateInput").value = "";
    } else {
      toast.error(`The vehicle with plate "${plate}" isn't parked here`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleChange = (event) => {
    setPlate(event.target.value);
  };

  // TODO(Gionave): Add error handling and a modal to confirm action
  return (
    <div className="h-34 w-full ">
      <ToastContainer />
      <div className="p-2 mt-4 sm:px-20">
        <form
          action=""
          className="p-4 shadow"
          onSubmit={(e) => {
            e.preventDefault();
            handleCarCheckout();
          }}
        >
          <div className="text-center text-sm font-mono">
            Check out a parked car
          </div>
          <div className="user-input-wrp">
            <br />
            <input
              type="text"
              className="inputText px-1 border-2"
              onChange={(event) => {
                handleChange(event);
              }}
              id="carPlateInput"
              required
            />
            <span className="floating-label">Car Plate</span>
          </div>
          <div className=" mt-4 flex items-center justify-center">
            <button
              type="button"
              onClick={handleCarCheckout}
              className="h-10 px-4 bg-sky-200 rounded-md hover:bg-sky-300"
            >
              Check out Vehicle
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CheckOut;
