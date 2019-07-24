const express = require('express');
const interestCalculator = require('./scripts/interestCalculator');

const app = express();
app.set('port', (process.env.PORT || 3001));


const allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
};

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
} else {
  app.use(allowCrossDomain);
}

app.use('/interestCalculator', interestCalculator);

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
