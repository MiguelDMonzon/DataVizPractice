angular
  .module('app')
  .component('app', {
    templateUrl: 'app/template.html',
    controllerAs: 'main',
    controller($http, jmespath, moment, _) {




      this.lineasDivisas = {data:{id:1},options:{}}

      this.lineasDivisas.options = {

        chart: {
          type: 'lineWithFocusChart',
          height: 450,
          margin : {
            top: 20,
            right: 20,
            bottom: 60,
            left: 40
          },
          duration: 500,
          useInteractiveGuideline: true,
          xAxis: {
            axisLabel: 'Años',
            tickFormat: function(d){
              return d3.format(',f')(d);
            }
          },
          x2Axis: {
            tickFormat: function(d){
              return d3.format(',f')(d);
            }
          },
          yAxis: {
            axisLabel: 'Cambio al dólar (USD)',
            tickFormat: function(d){
              return d3.format(',.2f')(d);
            },
            rotateYLabel: false
          },
          y2Axis: {
            tickFormat: function(d){
              return d3.format(',.2f')(d);
            }
          }
        }
      };

      var data_chart1 = []
      $http.get("http://localhost:7001/data/api/chart1_usd")
        .then((response) => {
          data_chart1.push(response.data)
        });

      $http.get("http://localhost:7001/data/api/chart1_gbp")
        .then((response) => {
          data_chart1.push(response.data)
        });

      this.lineasDivisas.data = data_chart1


      this.graficoCriptomonedas = {data:{id:1},options:{}}

      this.graficoCriptomonedas.options = {

        chart: {
          type: 'discreteBarChart',
          height: 450,
          margin : {
            top: 20,
            right: 20,
            bottom: 50,
            left: 55
          },
          x: function(d){return d.label;},
          y: function(d){return d.value;},
          showValues: true,
          valueFormat: function(d){
            return d3.format(',.4f')(d);
          },
          duration: 500,
          xAxis: {
            axisLabel: 'Nombre de la criptomoneda'
          },
          yAxis: {
            axisLabel: 'Valor (USD)',
            axisLabelDistance: -10
          }
        }
      };

      $http.get("http://localhost:7001/data/api/criptovalues")
        .then((response) => {

          var cripto_data = [
            {
              key: "Valor de criptomonedas actuales",
              values: response.data
            }
          ]
          this.graficoCriptomonedas.data = cripto_data

        });


      this.graficoMarketCap = {data:{id:1},options:{}}

      this.graficoMarketCap.options = {

        chart: {
          type: 'pieChart',
          height: 500,
          x: function(d){return d.key;},
          y: function(d){return d.y;},
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

      $http.get("http://localhost:7001/data/api/marketcap")
        .then((response) => {

          this.graficoMarketCap.data = response.data

        });


      this.graficoAll = {data:{id:1},options:{}}

      this.graficoAll.options = {

        chart: {
          type: 'sunburstChart',
          height: 450,
          color: d3.scale.category20c(),
          duration: 250
        }
      };




      $http.get("http://localhost:7001/data/api/all_criptocurrencies")
        .then((response) => {

          $http.get("http://localhost:7001/data/api/all_currencies_traditional")
            .then((response2) => {

              var json_data_sunburst = [
                {
                  "name": "Todas las divisas",
                  "children": [
                    {
                      "name": "Criptomonedas",
                      "children": response.data
                    },
                    {
                      "name": "Monedas tradicionales",
                      "children": response2.data
                    }
                  ]
                }
              ]


              console.log(json_data_sunburst)
              this.graficoAll.data = json_data_sunburst

            });

        });







    }
  });
