const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

const Data=require('../public/countrydetails');
const countiesData=require('../public/counties');
const Wards=require('../public/wards');
const postalCodes=require('../public/postalcodes');

app.use(cors({
  origin: '*'
}));

// country endpoint
app.get('/', (req, res) => {
  res.status(200).json(Data);
});
// counties endopint
app.get('/counties', (req, res) => {
  res.status(200).json(countiesData);
});

// wards endpoint
app.get('/wards', (req, res) => {
  res.status(200).json(Wards);
});
// postal_codes endpoint
app.get('/postalcodes', (req, res) => {
  res.status(200).json(postalCodes);
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})