import "./byeie"; // loučíme se s IE
import "./kalk";

import { data } from "./stats";
import { qu } from "./qu";

let sbox = '<select id="q-sel">'
let gr = '';
Object.keys(qu).forEach(v => {
  if (v.startsWith('predel')) {
    sbox += ' <optgroup label="' + qu[v] + '">'
    return
  }
  sbox +=  '<option value="' + v + '">' + qu[v] + '</option>'
})
document.getElementById('seldiv').innerHTML = sbox + '</select>';

function drawChart(q, divid) {
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

  Highcharts.chart(divid, {
    chart: {
        type: 'column',
        events: {
          render: function() {
            this.series.forEach(
              function(s) {
                s.dataLabelsGroup.hide();
              }
            )
          }
        }        
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
          text: '⟵ nesouhlasí\xa0 \xa0 souhlasí ⟶',
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
        borderColor: 'white',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
          formatter: function() {
          return '<b>' + this.series.name + '</b>' 
        }
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true,
                allowOverlap: true,
                padding: 0,
                formatter: function() {
                  return Math.abs(Math.round(this.y * 1000) / 10) + ' %';
                }
            }
        },
        series: {
          animation: false,
          events: {
            mouseOver: function() {
              this.dataLabelsGroup.show();
            },
            mouseOut: function() {
              this.dataLabelsGroup.hide();
            }
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

drawChart('r01_i1', 'postoje')
// embedy mimo hlavní graf
drawChart('r01_z3', 'r01_z3') // id otázky, pak id divu

document.getElementById('q-sel').onchange = function(){
  drawChart(this.selectedOptions[0].value, 'postoje')
};