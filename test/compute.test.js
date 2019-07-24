const chai = require('chai');
const compute = require('../scripts/compute');

describe('compute', () => {
  it('errors when values negative', () => {
    chai.assert.throws(() => compute({
      initialSavings: -1, monthlyDeposit: -1, interestRate: -1, years: -1, frequency: -1,
    }), 'Negative values');
  });

  it('returns array when given proper values', () => {
    chai.assert.isArray(compute({
      initialSavings: 10, monthlyDeposit: 10, interestRate: 0.01, years: 50, frequency: 12,
    }));
  });

  it('Correct values returned on yearly frequency', () => {
    chai.assert.deepEqual(compute({
      initialSavings: 10, monthlyDeposit: 10, interestRate: 0.01, years: 1, frequency: 12,
    }), [
      { month: 1, amount: 20 },
      { month: 2, amount: 30 },
      { month: 3, amount: 40 },
      { month: 4, amount: 50 },
      { month: 5, amount: 60 },
      { month: 6, amount: 70 },
      { month: 7, amount: 80 },
      { month: 8, amount: 90 },
      { month: 9, amount: 100 },
      { month: 10, amount: 110 },
      { month: 11, amount: 120 },
      { month: 12, amount: 131.3 }]);
  });
  it('Correct values returned on quarterly frequency', () => {
    chai.assert.deepEqual(compute({
      initialSavings: 10, monthlyDeposit: 10, interestRate: 0.01, years: 1, frequency: 4,
    }), [
      { month: 1, amount: 20 },
      { month: 2, amount: 30 },
      { month: 3, amount: 40 },
      { month: 4, amount: 50.5 },
      { month: 5, amount: 60.5 },
      { month: 6, amount: 70.5 },
      { month: 7, amount: 80.5 },
      { month: 8, amount: 91.41 },
      { month: 9, amount: 101.41 },
      { month: 10, amount: 111.41 },
      { month: 11, amount: 121.41 },
      { month: 12, amount: 132.72 }]);
  });
  it('Correct values returned on monthly frequency', () => {
    chai.assert.deepEqual(compute({
      initialSavings: 10, monthlyDeposit: 10, interestRate: 0.01, years: 1, frequency: 1,
    }), [
      { month: 1, amount: 20.2 },
      { month: 2, amount: 30.5 },
      { month: 3, amount: 40.91 },
      { month: 4, amount: 51.42 },
      { month: 5, amount: 62.03 },
      { month: 6, amount: 72.75 },
      { month: 7, amount: 83.58 },
      { month: 8, amount: 94.51 },
      { month: 9, amount: 105.56 },
      { month: 10, amount: 116.71 },
      { month: 11, amount: 127.98 },
      { month: 12, amount: 139.36 }]);
  });
});
