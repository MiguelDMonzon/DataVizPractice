// https://github.com/Pelirrojo/DataViz-DojoKata

var express = require('express');
var cors = require('cors');
var http = require('http');
var request = require('request');

var app = express();
app.use(cors())

app.get('/data/chart3', function (req, res) {

  // TODO devolver random o procedentes de base de datos

  res.send([
          {
            "key": "Series1",
            "color": "#d62728",
            "values": [
              {
                "label" : "Group A" ,
                "value" : -1.8746444827653
              } ,
              {
                "label" : "Group B" ,
                "value" : -8.0961543492239
              } ,
              {
                "label" : "Group C" ,
                "value" : -0.57072943117674
              } ,
              {
                "label" : "Group D" ,
                "value" : -2.4174010336624
              } ,
              {
                "label" : "Group E" ,
                "value" : -0.72009071426284
              } ,
              {
                "label" : "Group F" ,
                "value" : -0.77154485523777
              } ,
              {
                "label" : "Group G" ,
                "value" : -0.90152097798131
              } ,
              {
                "label" : "Group H" ,
                "value" : -0.91445417330854
              } ,
              {
                "label" : "Group I" ,
                "value" : -0.055746319141851
              }
            ]
          },
          {
            "key": "Series2",
            "color": "#1f77b4",
            "values": [
              {
                "label" : "Group A" ,
                "value" : 25.307646510375
              } ,
              {
                "label" : "Group B" ,
                "value" : 16.756779544553
              } ,
              {
                "label" : "Group C" ,
                "value" : 18.451534877007
              } ,
              {
                "label" : "Group D" ,
                "value" : 8.6142352811805
              } ,
              {
                "label" : "Group E" ,
                "value" : 7.8082472075876
              } ,
              {
                "label" : "Group F" ,
                "value" : 5.259101026956
              } ,
              {
                "label" : "Group G" ,
                "value" : 0.30947953487127
              } ,
              {
                "label" : "Group H" ,
                "value" : 0
              } ,
              {
                "label" : "Group I" ,
                "value" : 0
              }
            ]
          }
        ]

  );

});


app.get('/data/chart4', function (req, res) {

  // TODO devolver random o procedentes de base de datos

  res.send([
        {
          key: "One",
          y: 5
        },
        {
          key: "Two",
          y: 2
        },
        {
          key: "Three",
          y: 9
        },
        {
          key: "Four",
          y: 7
        },
        {
          key: "Five",
          y: 4
        },
        {
          key: "Six",
          y: 3
        },
        {
          key: "Seven",
          y: .5
        }
      ]
  );

});


app.get('/data/chart5', function (req, res) {

  // TODO devolver random o procedentes de base de datos

  res.send([
            {
                key: "One",
                y: 5
            },
            {
                key: "Two",
                y: 2
            },
            {
                key: "Three",
                y: 9
            },
            {
                key: "Four",
                y: 7
            },
            {
                key: "Five",
                y: 4
            },
            {
                key: "Six",
                y: 3
            },
            {
                key: "Seven",
                y: .5
            }
        ]
  );

});

app.get('/data/prueba/prueba', function (req, res) {

  var json_chart = require("./data_chart1_USD.json")
  res.send(json_chart)

});

app.get('/data/prueba/prueba2', function (req, res) {

  var json_chart = require("./data_chart1_GBP.json")
  res.send(json_chart)

});



app.get('/data/prueba/2000', function (req, res) {

  fecha = "2000-01-01"
  var peticion = request('http://api.fixer.io/'+fecha, function (error, response, body) {
      if (!error && response.statusCode == 200) {
          console.log(body) // Pinta en consola lo obtenido
          //res.send(response.body)
          var json_api = JSON.parse(response.body);

          var USD_value = json_api["rates"]["USD"]
          console.log(fecha.split("-")[0])
          console.log(USD_value)
          console.log([fecha.split("-")[0], USD_value])

          output = {
            x: 2000,
            y: USD_value
          }
          res.send(output)
       }
  });
});


app.get('/data/prueba/bitcoin', function (req, res) {

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

app.get('/data/prueba/marketcap', function (req, res) {

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


app.get('/data/prueba/all_criptocurrencies', function (req, res) {

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

app.get('/data/prueba/all_currencies_traditional', function (req, res) {

  var json_chart = require("./data_chart_sunburst.json")
  res.send(json_chart)

});


app.listen(7001, function () {
  console.log('Example app listening on port 7001!');
});
