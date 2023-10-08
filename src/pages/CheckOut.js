import React from "react";

function CheckOut() {
  // TODO(Gionave): After adding the Check in process, do a check out logic to add an exit DT to the record
  // TODO(Gionave): Add error handling and a modal to confirm action
  return (
    <div className="h-34 w-full">
      <div className="px-20 mt-4">
        <form action="" className="p-4 shadow">
          <div className="text-center text-sm font-mono">
            Check out a parked car
          </div>
          <div className="user-input-wrp">
            <br />
            <input type="text" className="inputText px-1 border-2" required />
            <span className="floating-label">Car Plate</span>
          </div>
          <div className=" mt-4 flex items-center justify-center">
            <button
              type="button"
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
