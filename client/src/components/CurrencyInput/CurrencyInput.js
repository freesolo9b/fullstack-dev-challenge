// @flow

import React, { useState } from 'react';
import './CurrencyInput.css';

type Props = {
	defaultValue: number,
  onChange: Function
};

const CurrencyInput = ({ defaultValue, onChange }: Props) => {
  const [value, setValue] = useState(defaultValue);
  const [changed, setChanged] = useState(false);

  const handleInputChange = (e) => {
    const val = e.target.value;
    setChanged(true);
    setValue(val);
    onChange(val);
  };

  return (
    <div className={`currency-input ${changed ? 'changed' : ''}`}>
      <span>£</span>
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default CurrencyInput;
