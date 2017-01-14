import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
/* eslint-disable no-console */

const port = 1804;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req,res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', (req,res) => {
  res.json([
    {"id": 1, "firstName": "Philip", "lastName": "Huysmans", "email": "gmail" },
    {"id": 2, "firstName": "Peter", "lastName": "De Bruyn", "email": "hotmail" },
    {"id": 3, "firstName": "Gilles", "lastName": "Oorts", "email": "yahoo" }
  ]);
});

app.listen(port, function(err) {
  if(err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
