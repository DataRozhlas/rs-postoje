import "./byeie"; // loučíme se s IE

import { data } from "./stats";
import { qu, grps } from "./qu";

let sbox = '<select id="q-sel">'
let gr = '';
Object.keys(qu).forEach(v => {
  let qid = v.split('_')[1].slice(0,-1)
  if (qid != gr) {
    gr = qid
    sbox += ' <optgroup label="' + grps[gr] + '">'
  }
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
    credits: {
      enabled: false
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
      min: -1,
      max: 1,
      title: {
          text: 'podíl odpovědí',
      },
      labels: {
        formatter: function() {
          return Math.abs(this.value) * 100 + ' %';
        }
      }
    },
    legend: {
        align: 'center',
        x: 0,
        verticalAlign: 'bottom',
        y: 20,
        floating: true,
        borderColor: 'white',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        formatter: function() {
          return '<b>' + this.series.name + ':</b> ' 
          + Math.abs(Math.round(this.y * 1000) / 10) + ' %'
        }
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: false
            }
        }
    },
    series: [{
        name: 'Rozhodně nesouhlasím',
        color: '#d73027',
        index: 2,
        data: vals[0].map(v => v*-1)
    }, {
        name: 'Spíše nesouhlasím',
        color: '#fdae61',
        index: 3,
        data: vals[1].map(v => v*-1)
    }, {
        name: 'Spíše souhlasím',
        color: '#a6d96a',
        index: 1,
        data: vals[2]
    }, {
      name: 'Rozhodně souhlasím',
      color: '#1a9641',
      index: 0,
      data: vals[3]
  }]
  });  
};

drawChart('r01_a1')

document.getElementById('q-sel').onchange = function(){
  drawChart(this.selectedOptions[0].value)
};