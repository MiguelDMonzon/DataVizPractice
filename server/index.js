// https://github.com/Pelirrojo/DataViz-DojoKata

var express = require('express');
var cors = require('cors');
var http = require('http');
var request = require('request');

var app = express();
app.use(cors())

app.get('/data/api/chart1_usd', function (req, res) {

  var json_chart = require("./data_chart1_USD.json")
  res.send(json_chart)

});

app.get('/data/api/chart1_gbp', function (req, res) {

  var json_chart = require("./data_chart1_GBP.json")
  res.send(json_chart)

});


app.get('/data/api/criptovalues', function (req, res) {

  var peticion = request('https://api.coinmarketcap.com/v1/ticker/', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body) // Pinta en consola lo obtenido
      //res.send(response.body)
      var json_api = JSON.parse(response.body);

      var output = []
      for(var i = 0; i < json_api.length; i++){

        if(json_api[i]["symbol"] == "BTC" ||
          json_api[i]["symbol"] == "ETH" ||
          json_api[i]["symbol"] == "LTC" ||
          json_api[i]["symbol"] == "XMR" ||
          json_api[i]["symbol"] == "XRP"){

          var json_output = {
            "label": json_api[i]["name"] + "(" + json_api[i]["symbol"] + ")",
            "value": parseFloat(json_api[i]["price_usd"])
          }
          output.push(json_output)

        }
      }
      res.send(output)
    }
  });
});

app.get('/data/api/marketcap', function (req, res) {

  var peticion = request('https://api.coinmarketcap.com/v1/ticker/', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body) // Pinta en consola lo obtenido
      //res.send(response.body)
      var json_api = JSON.parse(response.body);

      var output = []
      for(var i = 0; i < json_api.length; i++){

        if(json_api[i]["symbol"] == "BTC" ||
          json_api[i]["symbol"] == "ETH" ||
          json_api[i]["symbol"] == "LTC" ||
          json_api[i]["symbol"] == "XMR" ||
          json_api[i]["symbol"] == "XRP"){

          var json_output = {
            "key": json_api[i]["name"] + "(" + json_api[i]["symbol"] + ")",
            "y": parseFloat(json_api[i]["market_cap_usd"])
          }
          output.push(json_output)

        }
      }
      res.send(output)
    }
  });
});


app.get('/data/api/all_criptocurrencies', function (req, res) {

  var peticion = request('https://api.coinmarketcap.com/v1/ticker/', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body) // Pinta en consola lo obtenido
      //res.send(response.body)
      var json_api = JSON.parse(response.body);

      var output = []

      //Coge las 50 primeras
      for(var i = 0; i < 50; i++){

        var json_output = {
          "name": json_api[i]["name"] + "(" + json_api[i]["symbol"] + ")",
          "size": parseFloat(json_api[i]["price_usd"])
        }
        output.push(json_output)

      }
      res.send(output)
    }
  });
});

app.get('/data/api/all_currencies_traditional', function (req, res) {

  var json_chart = require("./data_chart_sunburst.json")
  res.send(json_chart)

});


app.listen(7001, function () {
  console.log('Example app listening on port 7001!');
});
