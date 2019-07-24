const compute = (params) => {
  const {
    initialSavings, monthlyDeposit, interestRate, years, frequency,
  } = params;
  if (initialSavings < 0 || monthlyDeposit < 0 || interestRate < 0 || years < 0 || frequency < 0) {
    throw Error('Negative values');
  }
  const result = [];
  let runningAmount = initialSavings;
  for (let i = 1; i <= years * 12; i++) {
    runningAmount = i % frequency === 0
      ? (runningAmount + monthlyDeposit) * (1 + interestRate)
      : (runningAmount + monthlyDeposit);
    result.push({ month: i, amount: Number(runningAmount.toFixed(2)) });
  }
  return result;
};

module.exports = compute;
