const dotenv = require('dotenv');
dotenv.config();
var path = require('path');
const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
// Require aylien npm package
var aylien = require('aylien_textapi');
const { text } = require('body-parser');

let projectData = {};

const app = express();
app.use(cors());
// to use json
app.use(bodyParser.json());
// to use url encoded values
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static('dist'));

var textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY,
});

// designates what port the app will listen to for incoming requests
app.listen(2020, function () {
  console.log('Example app listening on port 2020!');
});

app.get('/', function (req, res) {
  res.sendFile('dist/index.html');
});

app.post('/test', (req, res) => {
  console.log(req.body);
  textapi.sentiment({
    text: 'John is a very good football player',
    function(error, response) {
      if (error) {
        console.log(error);
      } else {
        console.log(response);
      }
    },
  });
});
