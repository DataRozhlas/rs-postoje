import "./byeie"; // loučíme se s IE

import { data } from "./stats";
import { qu } from "./qu";

let sbox = '<select id="q-sel">'
Object.keys(qu).forEach(v => {
  sbox +=  '<option value="' + v + '">' + qu[v] + '</option>'
})
document.getElementById('seldiv').innerHTML = sbox + '</select>';

function drawChart(q) {
  let d = data[q]
  const vals = [
    [],
    [],
    [],
    [],
  ];

  d.forEach(x => {
    vals[0].push(x[0]),
    vals[1].push(x[1]),
    vals[2].push(x[2]),
    vals[3].push(x[3])
  });

  Highcharts.chart('postoje', {
    chart: {
        type: 'column'
    },
    title: {
        text: qu[q]
    },
    xAxis: {
        categories: [
          'Zajištěná střední třída',
          'Nastupující kosmopolitní třída',
          'Tradiční pracující třída',
          'Třída místních vazeb',
          'Ohrožená třída',
          'Strádající třída',
      ]
    },
    yAxis: {
        title: {
            text: 'podíl odpovědí',
        },
        labels: {
          formatter: function() {
            return this.value * 100 + ' %';
          }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        formatter: function() {
          return '<b>' + this.series.name + ':</b> ' 
          + Math.round(this.y * 1000) / 10 + ' %'
        }
    },
    plotOptions: {
        column: {
            //stacking: 'percent',
            dataLabels: {
                enabled: false
            }
        }
    },
    series: [{
        name: 'Rozhodně nesouhlasím',
        color: '#d73027',
        data: vals[0] //.map(v => v*-1)
    }, {
        name: 'Spíše nesouhlasím',
        color: '#fdae61',
        data: vals[1] //.map(v => v*-1)
    }, {
        name: 'Spíše souhlasím',
        color: '#a6d96a',
        data: vals[2]
    }, {
      name: 'Rozhodně souhlasím',
      color: '#1a9641',
      data: vals[3]
  }]
  });  
};

drawChart('r01_a1')

document.getElementById('q-sel').onchange = function(){
  drawChart(this.selectedOptions[0].value)
};