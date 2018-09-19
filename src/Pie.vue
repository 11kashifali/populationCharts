<template>
  <div id="chart">

  </div>
</template>
<script>
  import Highchart from 'highcharts'
  export default {
    data() {
      return {
        populationdata: null
      }
    },
    mounted() {
      this.axios.get('http://api.population.io/1.0/population/1980/aged/18/')
        .then((res) => {
          this.populationdata = res.data
          this.populationdata.forEach(country => {
            country.y = country.total
            country.name = country.country
          });
          Highchart.chart('chart', {
            chart: {
              plotBackgroundColor: null,
              plotBorderWidth: null,
              plotShadow: false,
              type: 'pie'
            },
            title: {
              text: 'Countries\'s total population, 2018'
            },
            tooltip: {
              pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
              pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                  style: {
                    color: (Highchart.theme && Highchart.theme.contrastTextColor) || 'black'
                  }
                }
              }
            },
            series: [{
              name: 'Populations',
              colorByPoint: true,
              data: this.populationdata
            }]
          });
        })
    }
  }

</script>
