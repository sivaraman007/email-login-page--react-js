import React from "react";
import "./style.css";

function InputField({ placeholder, onChange, ...otherProps }) {
  return (
    <div>
      <input
        placeholder={placeholder}
        className="input-field"
        onChange={onChange}
        {...otherProps}
      />
    </div>
  );
}

export default InputField;
