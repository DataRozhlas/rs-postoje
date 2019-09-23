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
          text: '⟵ nesouhlasí\xa0\xa0|\xa0\xa0souhlasí ⟶',
      },
      labels: {
        formatter: function() {
          return Math.abs(this.value) * 100 + ' %';
        }
      }
    },
    legend: {
        align: 'center',
        verticalAlign: 'top',
        itemDistance: 10,
        shadow: false,
        symbolHeight: 10,
        symbolWidth: 10,
        symbolRadius: 0,
        x: -15
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
        legendIndex: 3,
        data: vals[0].map(v => v*-1)
    }, {
        name: 'Spíše nesouhlasím',
        color: '#fdae61',
        index: 3,
        legendIndex: 2,
        data: vals[1].map(v => v*-1)
    }, {
        name: 'Spíše souhlasím',
        color: '#a6d96a',
        index: 1,
        legendIndex: 1,
        data: vals[2]
    }, {
      name: 'Rozhodně souhlasím',
      color: '#1a9641',
      index: 0,
      legendIndex: 0,
      data: vals[3]
  }]
  });  
};

// embedy mimo hlavní graf
drawChart('r01_z3', 'r01_z3'); // id otázky, pak id divu
drawChart('r01_np1', 'r01_np1');
drawChart('r01_e2', 'r01_e2');
drawChart('r01_zj1', 'r01_zj1');
drawChart('r01_a2', 'r01_a2');
drawChart('r01_m2', 'r01_m2');
drawChart('r01_pol1', 'r01_pol1');
drawChart('r01_pos1', 'r01_pos1');
drawChart('r01_h1', 'r01_h1');
drawChart('r01_h2', 'r01_h2');
drawChart('r01_n2', 'r01_n2');




drawChart('r01_i1', 'postoje');
document.getElementById('q-sel').onchange = function(){
  drawChart(this.selectedOptions[0].value, 'postoje')
};