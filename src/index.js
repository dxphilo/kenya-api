const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

const approutes=require('../routes/routes');


app.use(cors({
  origin: '*'
}));

app.use('/',approutes);
// country endpoint
app.get('/', (req, res) => {
  res.status(200).send("<div><h2>Welcome to Kenya-APi</h2><p>This API documents info about beautiful country Kenya</p></div>");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
