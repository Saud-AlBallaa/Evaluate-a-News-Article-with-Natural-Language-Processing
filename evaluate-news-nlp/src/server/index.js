var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const fetch = require('node-fetch')
//so we hide our key variables
const dotenv = require('dotenv')
dotenv.config();

const mockAPIResponse = require('./mockAPI.js')

//instance
const app = express()
// main file
app.use(express.static('dist'))
app.use(bodyParser.urlencoded({ // to able to send url to the api
  extended: false
}));
app.use(bodyParser.json()); // using json
app.use(cors());

const api_KEY = process.env.API_KEY;
//console.log(`The API key is : ${API_KEY}`);
//console.log(__dirname)

app.get('/', function(req, res) {
  // this html file  will open after we run the server
  res.sendFile('dist/index.html')
  //res.sendFile(path.resolve('dist/index.html'));
})

// designates what port the app will listen to for incoming requests
// Use diffrent port from what webpack use
app.listen(3030, function() {
  console.log('Example app listening on port 3030!')
})


app.post('/test', async function(req, res) {
  let uInput = req.body.input; // user input
  console.log(`You are here ${uInput}`);
  const aURL = `https://api.meaningcloud.com/sentiment-2.1?key=${api_KEY}&lang=en&txt=${uInput}&model=general`; // api url

  const response = await fetch(aURL, {
    method: "POST",
  });
  const data = await response.json();
  console.log(data);
  res.send(data);
});


module.exports = app;
