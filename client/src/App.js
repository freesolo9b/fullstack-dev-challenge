import React, { useState, useEffect } from 'react';
import CurrencyInput from './components/CurrencyInput';
import SliderInput from './components/SliderInput';
import FrequencyInput from './components/FrequencyInput';
import DisplayGraph from './components/DisplayGraph';
import './App.css';

const App = () => {
  const [chartData, setChartData] = useState([]);
  const [initialSavings, setinitialSavings] = useState(1);
  const [monthlyDeposit, setMonthlyDeposit] = useState(0.1);
  const [interestRate, setInterestRate] = useState(0.04);
  const [years, setYears] = useState(50);
  const [frequency, setFrequency] = useState(12);

  const handleInputChange = type => (value) => {
    switch (type) {
      case 'initialSavings':
        setinitialSavings(value);
        break;
      case 'monthlyDeposit':
        setMonthlyDeposit(value);
        break;
      case 'interestRate':
        setInterestRate(value / 100);
        break;
      case 'years':
        setYears(value);
        break;
      case 'frequency':
        setFrequency(value);
        break;
      default:
    }
  };

  const handleDataLoad = (data) => {
    setChartData(data);
  };


  useEffect(() => {
    const chartDataAPI = async (params) => {
      const url = (process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3001/')
        + (params
          ? `interestCalculator?${Object.keys(params).map(key => `${key}=${params[key]}`).join('&')}`
          : 'interestCalculator');
      await fetch(url)
        .then(async (res) => {
          if (res.ok) {
            const data = await res.json();
            handleDataLoad(data);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };
    chartDataAPI({
      initialSavings, monthlyDeposit, interestRate, years, frequency,
    });
  },
  [initialSavings, monthlyDeposit, interestRate, years, frequency]);

  return (
    <div className="App">
      <div className="header-banner">
        <h1 className="fmz-white-font">Finimize Interest Rate Calculator</h1>
      </div>
      <div className="financial-inputs">
        <p className="input-label">How much have you saved?</p>
        <CurrencyInput defaultValue={initialSavings} onChange={handleInputChange('initialSavings')} />

        <p className="input-label">How much will you save each month?</p>
        <CurrencyInput defaultValue={monthlyDeposit} onChange={handleInputChange('monthlyDeposit')} />

        <p className="input-label">How much interest will you earn per year?</p>
        <SliderInput
          defaultValue={interestRate * 100}
          valueLabel="%"
          min={0}
          max={10}
          step={0.25}
          onChange={handleInputChange('interestRate')}
        />

        <p className="input-label">How many years will you invest for?</p>
        <SliderInput
          defaultValue={years}
          valueLabel=" years"
          min={0}
          max={80}
          step={1}
          onChange={handleInputChange('years')}
        />

        <p className="input-label">How often will your interest be calculated?</p>
        <FrequencyInput
          defaultValue={frequency}
          onChange={handleInputChange('frequency')}
        />
      </div>
      <div className="financial-display">
        <DisplayGraph data={chartData} />
      </div>
    </div>
  );
};

export default App;
