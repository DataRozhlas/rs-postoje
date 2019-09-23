const tridy = {
    1 : {'nazev' : 'zajištěná střední třída', 'barva' : '#1d8f64'},
    2 : {'nazev' : 'nastupující kosmopolitní třída', 'barva' : '#ce4a08'},
    3 : {'nazev' : 'tradiční pracující třída', 'barva' : '#6159a4'},
    4 : {'nazev' : 'třída místních vazeb', 'barva' : '#de0077'},
    5 : {'nazev' : 'ohrožená třída', 'barva' : '#569918'},
    6 : {'nazev' : 'strádající třída', 'barva' : '#df9c09'},
    data : {
        "Rozdělování studentů podle nadání":[-2,-11,-8,-13,-13,-14,12],
        "Životní prostředí – klima a ochota se omezit":[28,41,24,30,31,22,19],
        "Víra v Boha":[-45,-35,-45,-37,-33,-25,21],
        "Nejistota z budoucího vývoje":[12,6,28,22,25,36,30],
        "Vnímání nerovností – rovnostářství, zásluhovost, přerozdělování":[-2,-10,21,20,20,41,51],
        "Materialismus – nutnost prosadit vlastní zájmy, důležitost majetku":[-5,-9,9,3,7,23,32],
        "Společnost stojící na autoritě – silný vůdce, přizpůsobení se":[31,21,43,43,41,53,32],
        "Více rozhodování lidem, méně voleným politikům":[14,7,33,30,30,45,38],
        "Obavy z migrace":[22,-2,50,44,42,57,59],
        "Korporace vydělávají na úkor ČR":[45,30,59,59,56,68,37],
        "Více žáků na učiliště":[39,30,46,52,44,58,28],
        "Patriotismus - hrdost na vlastní zemi":[49,46,50,56,50,54,10],
        "Nadřazenost vlastní kultury":[-5,-16,6,7,4,12,28],
        "Společnost je rozdělená na dva tábory":[2,-3,15,10,14,32,34],
        "Prozápadní směřování":[44,48,17,21,12,2,46],
        "Zájem o politiku a dění okolo sebe":[27,29,11,7,4,2,26],
        "Vývoj po roce 1989 a využité šance":[0,5,-23,-16,-23,-36,40],
        "V české společnosti je soulad":[9,8,-1,7,0,-6,15]
      }
};

const kresliGraf = (data) => {
    
    let cisla = tridy.data[data];
    if (cisla.length > 6) { cisla.pop() };
    
    Highcharts.chart('graf2', {
        chart: {
            type: 'column'
        },
        title: {
            text: data
        },
        credits: {
            enabled: false
        },
        legend: {
            enabled: false
        },
        colors: ['#1d8f64', '#ce4a08', '#6159a4', '#de0077', '#569918', '#df9c09' ],
        xAxis: {
            categories: [
                'Zajištěná střední třída',
                'Nastupující kosmopolitní třída',
                'Tradiční pracující třída',
                'Třída místních vazeb',
                'Ohrožená třída',
                'Strádající třída'
            ],
            crosshair: true
        },
        yAxis: {
            max: 70,
            min: -70,
            title: {
                text: 'index vnímání tématu veřejností'
            }
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            },
            series: {
                animation: false,
                colorByPoint: true
            }
        },
        series: [{
            name: data,
            data: cisla    
        }]
    });
}

// seřaď data
let serazeno = Object.keys(tridy.data);
serazeno.sort((a,b) => {
    return tridy.data[b][6] - tridy.data[a][6];
});

// vygeneruj prepinatko grafů
const teplomerList = document.querySelector("#teplomer-list");
serazeno.forEach((t) => {
    teplomerList.innerHTML += `<a class="polozka-odkaz"><div class="polozka">${t}</div></a>`    
});

document.querySelector('.polozka').classList.add('vybrano');

teplomerList.addEventListener('click', (e) => {
    if (e.target !== teplomerList) {
        document.querySelector('.vybrano').classList.remove('vybrano');
        e.target.classList.add('vybrano');
        kresliGraf(e.target.childNodes[0].textContent);
    }
    location.hash = "graf-kotva";
});

//kresli první graf

kresliGraf("Obavy z migrace");