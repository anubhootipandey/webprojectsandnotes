import React, { useState } from 'react';

function Input({ onSaveInput }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSaveInput = () => {
    onSaveInput(inputValue);
    setInputValue('');
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleSaveInput}>SAVE INPUT</button>
    </div>
  );
}

export default Input;
