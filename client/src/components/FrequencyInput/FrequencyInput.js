// @flow

import React, { useState } from 'react';
import './FrequencyInput.css';

type Props = {
    defaultValue: number,
    onChange: Function
};

const FrequencyInput = ({ defaultValue, onChange }: Props) => {
  const [value, setValue] = useState(defaultValue);

  const handleInputChange = (e) => {
    const val = Number(e.target.value);
    setValue(val);
    onChange(val);
  };

  return (
    <table className="frequency-input">
      <tbody>
        <tr>
          <td className={value === 1 ? 'checked' : ''}>
            <input
              type="radio"
              name="monthly"
              value={1}
              checked={value === 1}
              onChange={handleInputChange}
            />
            Monthly
          </td>
          <td className={value === 4 ? 'checked' : ''}>
            <input
              type="radio"
              name="quarterly"
              value={4}
              checked={value === 4}
              onChange={handleInputChange}
            />
            Quarterly
          </td>
          <td className={value === 12 ? 'checked' : ''}>
            <input
              type="radio"
              name="yearly"
              value={12}
              checked={value === 12}
              onChange={handleInputChange}
            />
            Yearly
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default FrequencyInput;
