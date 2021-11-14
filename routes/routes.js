const express = require('express');
const router=express.Router();


const Data=require('../public/countrydetails');
const countiesData=require('../public/counties');
const Wards=require('../public/wards');
const postalCodes=require('../public/postalcodes');


// country endpoint
router.get('/v1/', (req, res) => {
  res.status(200).json(Data);
});
// counties endopint
router.get('/v1/counties', (req, res) => {
  res.status(200).json(countiesData);
});

// wards endpoint
router.get('/v1/wards', (req, res) => {
  res.status(200).json(Wards);
});
// postal_codes endpoint
router.get('/v1/postalcodes', (req, res) => {
  res.status(200).json(postalCodes);
});

module.exports=router
