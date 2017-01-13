import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 1804;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req,res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
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
