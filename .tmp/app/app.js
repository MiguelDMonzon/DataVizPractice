angular.module('app').component('app', {
  templateUrl: 'app/template.html',
  controllerAs: 'main',
  controller($http, jmespath, moment, _) {

    this.chart2 = { data: {}, options: {} };

    // Reference $HTTP: https://www.w3schools.com/angular/angular_http.asp
    // Reference NVD3: http://krispo.github.io/angular-nvd3/#/quickstart

    this.hello = 'Cuadro de mando, TransferWise';
    this.greetings = "Bienvenidos al dashboard ficticio de TransferWise";

    this.callback = function () {};

    this.chart2.options = {
      chart: {
        type: 'discreteBarChart',
        height: 200,
        margin: {
          top: 10,
          bottom: 30,
          right: 10,
          left: 10
        },
        x: d => {
          return d.label;
        },
        y: function (d) {
          return d.value;
        },
        showValues: true,
        valueFormat: function (d) {
          return d3.format(',.4f')(d);
        },
        transitionDuration: 500,
        xAxis: {
          axisLabel: 'X Axis'
        },
        yAxis: {
          axisLabel: 'Y Axis',
          axisLabelDistance: 30
        }
      }
    };

    let rawData = [{ "label": "A", "value": 150000000 }, { "label": "B", "value": 160000000 }, { "label": "C", "value": 140000000 }, { "label": "D", "value": 110000000 }, { "label": "E", "value": 100000000 }, { "label": "F", "value": 200000000 }, { "label": "G", "value": 130000000 }, { "label": "H", "value": 120000000 }];

    this.chart2.data = [{
      key: "Cumulative Return",
      values: rawData
    }];

    //GRafico 2
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////7


    //Gráfico 3
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////7
    this.chart3 = {
      data: {
        id: 1
      },
      options: {}
    };

    this.chart3.options = {
      chart: {
        type: 'multiBarHorizontalChart',
        height: 450,
        x: function (d) {
          return d.label;
        },
        y: function (d) {
          return d.value;
        },
        //yErr: function(d){ return [-Math.abs(d.value * Math.random() * 0.3), Math.abs(d.value * Math.random() * 0.3)] },
        showControls: true,
        showValues: true,
        duration: 500,
        xAxis: {
          showMaxMin: false
        },
        yAxis: {
          axisLabel: 'Values',
          tickFormat: function (d) {
            return d3.format(',.2f')(d);
          }
        }
      }
    };

    this.chart3.data = [];

    $http.get("http://localhost:7001/data/chart3").then(response => {
      this.chart3.data = response.data;
    });

    //GRafico 4
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////7

    this.chart4 = {
      data: {
        id: 1
      },
      options: {}
    };

    this.chart4.options = {
      chart: {
        type: 'pieChart',
        height: 450,
        donut: true,
        x: function (d) {
          return d.key;
        },
        y: function (d) {
          return d.y;
        },
        showLabels: true,

        pie: {
          startAngle: function (d) {
            return d.startAngle / 2 - Math.PI / 2;
          },
          endAngle: function (d) {
            return d.endAngle / 2 - Math.PI / 2;
          }
        },
        duration: 500,
        legend: {
          margin: {
            top: 5,
            right: 140,
            bottom: 5,
            left: 0
          }
        }
      }
    };

    this.chart4.data = [];

    $http.get("http://localhost:7001/data/chart4").then(response => {
      this.chart4.data = response.data;
    });

    //GRafico 5
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////7

    this.chart5 = {
      data: {
        id: 1
      },
      options: {}
    };

    this.chart5.options = {

      chart: {
        type: 'pieChart',
        height: 500,
        x: function (d) {
          return d.key;
        },
        y: function (d) {
          return d.y;
        },
        showLabels: true,
        duration: 500,
        labelThreshold: 0.01,
        labelSunbeamLayout: true,
        legend: {
          margin: {
            top: 5,
            right: 35,
            bottom: 5,
            left: 0
          }
        }
      }
    };

    this.chart5.data = [];

    $http.get("http://localhost:7001/data/chart5").then(response => {
      this.chart5.data = response.data;
    });

    this.chart1 = { data: { id: 1 }, options: {} };

    this.chart1.options = {

      chart: {
        type: 'lineWithFocusChart',
        height: 450,
        margin: {
          top: 20,
          right: 20,
          bottom: 60,
          left: 40
        },
        duration: 500,
        useInteractiveGuideline: true,
        xAxis: {
          axisLabel: 'X Axis',
          tickFormat: function (d) {
            return d3.format(',f')(d);
          }
        },
        x2Axis: {
          tickFormat: function (d) {
            return d3.format(',f')(d);
          }
        },
        yAxis: {
          axisLabel: 'Y Axis',
          tickFormat: function (d) {
            return d3.format(',.2f')(d);
          },
          rotateYLabel: false
        },
        y2Axis: {
          tickFormat: function (d) {
            return d3.format(',.2f')(d);
          }
        }
      }
    };

    var data_chart1 = [];
    $http.get("http://localhost:7001/data/prueba/prueba").then(response => {
      data_chart1.push(response.data);
    });

    $http.get("http://localhost:7001/data/prueba/prueba2").then(response => {
      data_chart1.push(response.data);
    });

    this.chart1.data = data_chart1;

    this.graficoCriptomonedas = { data: { id: 1 }, options: {} };

    this.graficoCriptomonedas.options = {

      chart: {
        type: 'discreteBarChart',
        height: 450,
        margin: {
          top: 20,
          right: 20,
          bottom: 50,
          left: 55
        },
        x: function (d) {
          return d.label;
        },
        y: function (d) {
          return d.value;
        },
        showValues: true,
        valueFormat: function (d) {
          return d3.format(',.4f')(d);
        },
        duration: 500,
        xAxis: {
          axisLabel: 'X Axis'
        },
        yAxis: {
          axisLabel: 'Y Axis',
          axisLabelDistance: -10
        }
      }
    };

    $http.get("http://localhost:7001/data/prueba/bitcoin").then(response => {

      var cripto_data = [{
        key: "Valor de criptomonedas actuales",
        values: response.data
      }];
      this.graficoCriptomonedas.data = cripto_data;
    });

    this.graficoMarketCap = { data: { id: 1 }, options: {} };

    this.graficoMarketCap.options = {

      chart: {
        type: 'pieChart',
        height: 500,
        x: function (d) {
          return d.key;
        },
        y: function (d) {
          return d.y;
        },
        showLabels: true,
        duration: 500,
        labelThreshold: 0.01,
        labelSunbeamLayout: true,
        legend: {
          margin: {
            top: 5,
            right: 35,
            bottom: 5,
            left: 0
          }
        }
      }
    };

    $http.get("http://localhost:7001/data/prueba/marketcap").then(response => {

      this.graficoMarketCap.data = response.data;
    });

    this.graficoAll = { data: { id: 1 }, options: {} };

    this.graficoAll.options = {

      chart: {
        type: 'sunburstChart',
        height: 450,
        color: d3.scale.category20c(),
        duration: 250
      }
    };

    $http.get("http://localhost:7001/data/prueba/all_criptocurrencies").then(response => {

      $http.get("http://localhost:7001/data/prueba/all_currencies_traditional").then(response2 => {

        var json_data_sunburst = [{
          "name": "Todas las divisas",
          "children": [{
            "name": "Criptomonedas",
            "children": response.data
          }, {
            "name": "Monedas tradicionales",
            "children": response2.data
          }]
        }];

        console.log(json_data_sunburst);
        this.graficoAll.data = json_data_sunburst;
      });
    });
  }
});