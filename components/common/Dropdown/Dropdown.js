import React from 'react';

export const Dropdown = ({ name, value, onChange, options }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      name={name}
      className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
    >
      {options.map((option) => (
        <option key={option.id} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;