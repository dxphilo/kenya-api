const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

const Data=require('../public/countrydetails');
const countiesData=require('../public/counties');
const Wards=require('../public/wards');

app.use(cors({
  origin: '*'
}));

// getting county details
app.get('/', (req, res) => {
  res.status(200).json(Data);
});
// county details
app.get('/counties', (req, res) => {
  res.status(200).json(countiesData);
});

// county details
app.get('/wards', (req, res) => {
  res.status(200).json(Wards);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})