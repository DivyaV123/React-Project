import React from "react";

const RadioButton = ({ id, label, checked, onChange }) => {
  return (
    <div className="flex items-center space-x-2 pb-[1.111vh]">
      <input
        type="radio"
        id={id}
        name={id} 
        checked={checked}  // This should correctly reflect the checked state from the parent
        onChange={onChange}
      />
      <label htmlFor={id} className="text-[#002248] text-[0.938vw] mobile:text-[3.721vw]">
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
