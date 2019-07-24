const compute = require('./compute');

const interestCalculator = (req, res) => {
  const {
    initialSavings, monthlyDeposit, interestRate, years, frequency,
  } = req.query;
  const params = {
	  initialSavings: Number(initialSavings),
	  monthlyDeposit: Number(monthlyDeposit),
	  interestRate: Number(interestRate),
	  years: Number(years),
	  frequency: Number(frequency),
  };
  const result = compute(params);
  res.status(201).send(result);
};


module.exports = interestCalculator;
