import React, { useState } from "react";

const Dropdown = ({ name, options, selectDefault }) => {
  const optionDefault = options.find(
    (option) => option.label === selectDefault
  );

  const [selectedOption, setSelectedOption] = useState(
    optionDefault ? optionDefault.value : ""
  );

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <select
        id={name}
        value={selectedOption}
        onChange={handleDropdownChange}
        className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 mt-1"
      >
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
