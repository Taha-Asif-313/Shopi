import React, { useState } from "react";
import { FaVideo, FaBoxOpen } from "react-icons/fa";
import { IoFilterSharp } from "react-icons/io5";

const FilterDropdown = ({ options, onSelect }) => {
  const [selected, setSelected] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    setSelected(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block w-full">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between px-4 py-4 w-full text-white bg-primary rounded-lg shadow-md hover:bg-primary-dark transition-all"
      >
        <span className="flex items-center max-md:text-[12px] gap-2">
          <IoFilterSharp className="text-lg" /> {selected.label}
        </span>
        <span>▼</span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelect(option)}
              className="flex items-center gap-2 px-4 py-2 w-full text-gray-700 hover:bg-gray-100 transition-all"
            >
              <span className="text-lg">{option.icon}</span> {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
