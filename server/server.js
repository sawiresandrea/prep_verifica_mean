// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const cors = require('cors');
const file_product = require('./products.json')

const app = express();
app.use(cors());

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
   res.send("it's working");
   //res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.get('/', function (req, res){
    res.sendFile(path.join(__dirname+'/html/index.html'));
});

app.get('/sitemap', function (req, res){
    res.sendFile(path.join(__dirname+'/html/sitemap.html'));
});

app.get('/about', function (req, res){
    res.sendFile(path.join(__dirname+'/html/about.html'));
});

app.get('/api', (req, res) => {
  var jsonData = {"results": ["Important 1 ","Thing 2",]};
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(jsonData));
});

app.get('/api/products', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(file_product));
});

//Get port from environment and store in Express.
const port = process.env.PORT || '3000';
app.set('port', port);

//Listen on provided port, on all network interfaces.
app.listen(port,  () => {
    console.log('Example app listening on port 3000!');
});