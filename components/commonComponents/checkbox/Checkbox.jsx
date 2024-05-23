
import React from "react";

const Checkbox = ({ id, label, checked, onChange }) => {
  return (
    <div className="flex items-center space-x-2 pb-[1.111vh]">
      <input
        type="checkbox"
        id={id}
        name={id}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id} className="text-[#002248] text-[0.938vw]">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
