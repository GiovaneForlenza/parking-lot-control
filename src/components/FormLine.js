import React from "react";

import "../css/formLine.css";

function FormLine({ labelText, inputType, inputData }) {
  if (inputType === "text") {
    return (
      <div className="user-input-wrp">
        <br />
        <input type="text" className="inputText px-1 border-2" required />
        <span className="floating-label">{labelText}</span>
      </div>
    );
  } else {
    return (
      <div
        className="mt-8 flex border-b border-slate-500
      pb-2"
      >
        <label htmlFor="" className="w-16">
          {labelText}
        </label>
        {inputType === "select" ? (
          <select name="" id="" className="w-40">
            <option value="">Select a car make</option>
            <option value="">Ford</option>
            <option value="">Ram</option>
            <option value="">Toyota</option>
            <option value="">Lexus</option>
          </select>
        ) : (
          <div className="">aa</div>
        )}
      </div>
    );
  }
}

export default FormLine;
