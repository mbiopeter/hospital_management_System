import React, { useState } from 'react';
import './SelectMedicine.css';
const SelectMedicine = () => {
  const [inputValue, setInputValue] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const [options, setOptions] = useState([]); 

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setOptions(['Panadol', 'Amozil', 'Ketakenazol', 'Pilton']);
    setShowOptions(true);
  };

  const filterOptions = () => {
    return options.filter(option => option.toLowerCase().includes(inputValue.toLowerCase()));
  };

  const handleOptionClick = (selectedOption) => {
    setInputValue(selectedOption);
    setShowOptions(false);
  };

  return (
    <div className="SelectMedicineContainer">
      <input type="text" value={inputValue} onChange={handleInputChange} />
      {showOptions && (
        <div className="SelectMedicineContainerOptionsOverlay">
          {filterOptions().map((option, index) => (
            <div key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectMedicine;
