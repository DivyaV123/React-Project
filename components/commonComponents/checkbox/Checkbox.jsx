
import React from "react";

const Checkbox = ({ id, label, checked, onChange }) => {
  const handleClick = (event) => {
    // If the click occurred on the label, prevent default behavior
    if (event.target.tagName === "LABEL") {
      event.preventDefault();
    } else {
      // Otherwise, trigger the onChange function
      onChange();
    }
  };
  return (
    <div className="flex items-center space-x-2 pb-[1.111vh]">
      <input
        type="checkbox"
        className="cursor-pointer"
        id={`checkbox-${id}`}
        checked={checked}
        onChange={onChange}
        onClick={(event) => event.stopPropagation()}
      />
      <label htmlFor={`checkbox-${id}`} className="text-[#002248] text-[0.938vw]" onClick={handleClick}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
