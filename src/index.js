const express = require('express')
const app = express()
const port = 3000

const Data=require('../public/countrydetails')

app.get('/', (req, res) => {
  res.send(Data)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})