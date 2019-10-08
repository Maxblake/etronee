const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

//load .env into process environment, config to look for .env and add it to process environment
if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

//use body parser middleware to process the request's body coming in into json every time
app.use(bodyParser.json());
//the URL-encoded data will be parsed with the qs library, which allows to create a nested object from query string.
app.use(bodyParser.urlencoded({ extended: true }));
//cors
app.use(cors());

//serve client application
if (process.env.NODE_ENV === 'production') {
  //serve all static files in build
  app.use(express.static(path.join(__dirname, 'client/build')));

  //for any route, send index.html to client in respond
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});

//build payment route
app.post('/payment', (req, res) => {
  //create a body object that is going to pass to stripe using values from the token in client
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd'
  };

  //make the charge with the body object above to stripe API
  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      //send the error from stripe back to client
      res.status(500).send({ error: stripeErr });
    } else {
      //send the success message back to client
      res.status(200).send({ success: stripeRes });
    }
  });
});
