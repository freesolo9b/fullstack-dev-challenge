// @flow

import React, { useState } from 'react';
import './SliderInput.css';

type Props = {
	defaultValue: number,
  valueLabel: string,
  onChange: Function,
  min: number,
  max: number,
  step: number,
};

const SliderInput = ({
  defaultValue, valueLabel, onChange, min, max, step,
}: Props) => {
  const [value, setValue] = useState(defaultValue);

  const [changed, setChanged] = useState(false);

  const handleInputChange = (e) => {
    const val = e.target.value;
    setChanged(true);
    setValue(val);
    onChange(val);
  };

  return (
    <div className={`fmz-slider ${changed ? 'changed' : ''}`}>
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={handleInputChange}
      />
      <span>
        {`${value}${valueLabel}`}
      </span>
    </div>
  );
};

export default SliderInput;
