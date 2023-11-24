import React, { useState } from 'react';
import './SelectInput.css';
const ComplainSelect = () => {
  const [inputValue, setInputValue] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const [options, setOptions] = useState(['Fever', 'Cough', 'Cold', 'Others']); 

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
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
    <div className="customInputContainer">
      <input type="text" value={inputValue} onChange={handleInputChange} />
      {showOptions && (
        <div className="optionsOverlay">
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

export default ComplainSelect;
