<template>
  <div id="chart">

  </div>
</template>
<script>
  import Highchart from 'highcharts'
  export default {
    data() {
      return {
        femalePopulation: [],
        malePopulation: [],
        populationdata:null,
      }
    },
    mounted() {
      this.axios.get('http://api.population.io/1.0/population/Pakistan/18')
        .then((res) => {
          var maledata = res.data
          maledata.forEach(country => {
           this.malePopulation.push(parseInt(country.males,10))
           this.femalePopulation.push(parseInt(country.females,10))
          });
          Highchart.chart('chart', {
            chart: {
              type: 'area'
            },
            title: {
              text: 'Females And Males Population In Pakistan'
            },
            subtitle: {
              text: 'Sources: <a href="http://api.population.io/1.0/population/Pakistan/18">' +
                'Api Population</a>'
            },
            xAxis: {
              allowDecimals: false,
              labels: {
                formatter: function () {
                  return this.value; 
                }
              }
            },
            yAxis: {
              title: {
                text: 'Population'
              },
              labels: {
                formatter: function () {
                  return this.value / 1000 + 'k';
                }
              }
            },
            tooltip: {
              pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
            },
            plotOptions: {
              area: {
                pointStart: 1950,
                pointInterval: 1,
              }
            },
            series: [{
              name: 'Male',
              data: this.malePopulation
            }, {
              name: 'Female Population',
              data:this.femalePopulation
            }]
          });

        })
    }
  }

</script>
