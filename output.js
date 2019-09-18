/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/byeie.js":
/*!*********************!*\
  !*** ./js/byeie.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("if (navigator.appName === \"Microsoft Internet Explorer\" || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/))) {\n  var warn = document.createElement(\"div\");\n  warn.innerHTML = \"Používáte zastaralý Internet Explorer, takže vám části tohoto webu nemusí fungovat. Navíc to <a target=\\\"_blank\\\" style=\\\"color:white;\\\" rel=\\\"noopener noreferrer\\\" href=\\\"https://www.zive.cz/clanky/microsoft-internet-explorer-neni-prohlizec-prestante-ho-tak-pouzivat/sc-3-a-197149/default.aspx\\\">není bezpečné</a>, zvažte přechod na <a target=\\\"_blank\\\" style=\\\"color:white;\\\" rel=\\\"noopener noreferrer\\\" href=\\\"https://www.mozilla.org/cs/firefox/new/\\\">jiný prohlížeč</a>.\";\n  warn.style.cssText = \"text-align:center;position:absolute;width:100%;height:auto;opacity:1;z-index:100;background-color:#d52834;top:37px;padding-top:4px;padding-bottom:3px;color:white;\";\n  document.body.appendChild(warn);\n}\n\n//# sourceURL=webpack:///./js/byeie.js?");

/***/ }),

/***/ "./js/qu.js":
/*!******************!*\
  !*** ./js/qu.js ***!
  \******************/
/*! exports provided: qu, grps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"qu\", function() { return qu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"grps\", function() { return grps; });\nvar qu = {\n  'r01_i1': 'Imigranti způsobují nárůst trestné činnosti.',\n  'r01_i2': 'Imigranti ohrožují náš způsob života.',\n  'r01_i3': 'Imigranti ohrožují českou ekonomiku a sociální jistoty.',\n  'r01_n1': 'Ekonomické a společenské nerovnosti v Česku jsou příliš velké.',\n  'r01_n2': 'Úspěch v Česku závisí spíše na tom, kde a do jaké rodiny se narodíte, než na vlastní snaze.',\n  'r01_lp1': 'Lidé s vysokým příjmem a bohatí by na daních měli platit vyšší procento ze svého příjmu či majetku.',\n  'r01_lp2': 'Volný trh by takřka nikdy neměl být omezován státními regulacemi.',\n  'r01_z1': 'Členství v EU je pro nás prospěšné.',\n  'r01_z2': 'Členství v NATO je pro nás prospěšné.',\n  'r01_z3': 'Česko patří na Západ.',\n  'r01_h1': 'Společnost se po roce 1989 ubírá obecně správným směrem.',\n  'r01_h2': 'Politici a lídři v posledních 30 letech většinu věcí zkazili.',\n  'r01_p1': 'Lidé, a nikoliv politici by měli dělat nejdůležitější rozhodnutí ve společnosti.',\n  'r01_p2': 'Obyčejní lidé se v pohledu na politiku a společnost lépe shodnou mezi sebou, než s politiky a elitami.',\n  'r01_g1': 'Lidé jako jsem já na globalizaci a moderních trendech ve společnosti výrazně vydělávají.',\n  'r01_g2': 'Velké nadnárodní firmy vydělávají na úkor České republiky.',\n  'r01_g3': 'Vývoj dnešní společnosti nelze předvídat, což mne velmi zneklidňuje.',\n  'r01_ind1': 'Dnes se člověk musí ohlížet především na to, co je výhodné pro něj osobně.',\n  'r01_pol1': 'Společnost je rozdělená na dva nesmiřitelné tábory.',\n  'r01_m1': 'Věci, které člověk vlastní, říkají hodně o tom, jak dobrý život vede.',\n  'r01_m2': 'Byl/a bych v životě spokojenější a šťastnější, pokud bych si mohl/a dovolit pořídit věci, které dnes nevlastním.',\n  'r01_a1': 'Školy by měly učit děti uznávat autoritu.',\n  'r01_a2': 'Silný vůdce je důležitý pro Českou republiku, i když nebude vždy jednat v souladu se zavedenými pravidly.',\n  'r01_k1': 'Nejlepší je dělat věci tradičními způsoby, postaru.',\n  'r01_k2': 'Příslušníci menšin by se měli přizpůsobit českým zvykům a tradicím.',\n  'r01_vz1': 'Více dětí než dnes by mělo chodit studovat na učiliště.',\n  'r01_vz2': 'V základním školství bychom měli oddělovat talentované studenty od méně nadaných.',\n  'r01_zj1': 'Téměř každý den sleduji vývoj na naší politické scéně.',\n  'r01_zj2': 'Zajímám se o mezinárodní události.',\n  'r01_v1': 'Věřím v Boha, tak jak ho chápe křesťanství či jiné náboženství.',\n  'r01_v2': 'Ve svém životě se snažím dodržovat hodnoty Desatera.',\n  'r01_e1': 'Člověkem způsobené klimatické změny zásadně ohrožují naši budoucnost.',\n  'r01_e2': 'Byl/a bych ochoten/ochotna obětovat 5 % svých příjmů, pokud bych věděl/a, že to pomůže ochraně životního prostředí.',\n  'r01_pos1': 'I když se to někdy nezdá, naše společnost funguje ve vzájemném souladu.',\n  'r01_np1': 'Jsem hrdý/-á na to, že jsem příslušníkem svého národa.',\n  'r01_np2': 'Kultura mého národa je lepší než většina ostatních.'\n};\nvar grps = {\n  'a': 'Společnost stojící na autoritě – silný vůdce, přizpůsobení se',\n  'k': 'Nadřazenost vlastní kultury',\n  'p': 'Více rozhodování lidem, méně voleným politikům',\n  'lp': 'Přerozdělování',\n  'n': 'Vnímání nerovností',\n  'np': 'Patriotismus - hrdost na vlastní zemi',\n  'v': 'Víra v Boha',\n  'm': 'Materialismus – nutnost prosadit vlastní zájmy, důležitost majetku',\n  'zj': 'Zájem o politiku a dění okolo sebe',\n  'g': 'Korporace vydělávají na úkor ČR',\n  'z': 'Prozápadní směřování',\n  'h': 'Vývoj po roce 1989 a využité šance',\n  'i': 'Obavy z migrace',\n  'vz': 'Více žáků na učiliště',\n  'e': 'Životní prostředí – klima a ochota se omezit',\n  'ind': 'Individualismus',\n  'pol': 'Společnost je rozdělená na dva tábory',\n  'pos': 'V české společnosti je soulad'\n};\n\n//# sourceURL=webpack:///./js/qu.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _byeie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./byeie */ \"./js/byeie.js\");\n/* harmony import */ var _byeie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_byeie__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _stats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stats */ \"./js/stats.js\");\n/* harmony import */ var _qu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./qu */ \"./js/qu.js\");\n // loučíme se s IE\n\n\n\nvar sbox = '<select id=\"q-sel\">';\nvar gr = '';\nObject.keys(_qu__WEBPACK_IMPORTED_MODULE_2__[\"qu\"]).forEach(function (v) {\n  var qid = v.split('_')[1].slice(0, -1);\n\n  if (qid != gr) {\n    gr = qid;\n    sbox += ' <optgroup label=\"' + _qu__WEBPACK_IMPORTED_MODULE_2__[\"grps\"][gr] + '\">';\n  }\n\n  sbox += '<option value=\"' + v + '\">' + _qu__WEBPACK_IMPORTED_MODULE_2__[\"qu\"][v] + '</option>';\n});\ndocument.getElementById('seldiv').innerHTML = sbox + '</select>';\n\nfunction drawChart(q) {\n  var d = _stats__WEBPACK_IMPORTED_MODULE_1__[\"data\"][q];\n  var vals = [[], [], [], []];\n  d.forEach(function (x) {\n    vals[0].push(x[0]), vals[1].push(x[1]), vals[2].push(x[2]), vals[3].push(x[3]);\n  });\n  Highcharts.chart('postoje', {\n    chart: {\n      type: 'column'\n    },\n    credits: {\n      enabled: false\n    },\n    title: {\n      text: _qu__WEBPACK_IMPORTED_MODULE_2__[\"qu\"][q]\n    },\n    xAxis: {\n      categories: ['Zajištěná střední třída', 'Nastupující kosmopolitní třída', 'Tradiční pracující třída', 'Třída místních vazeb', 'Ohrožená třída', 'Strádající třída']\n    },\n    yAxis: {\n      min: -1,\n      max: 1,\n      title: {\n        text: 'podíl odpovědí'\n      },\n      labels: {\n        formatter: function formatter() {\n          return Math.abs(this.value) * 100 + ' %';\n        }\n      }\n    },\n    legend: {\n      align: 'center',\n      x: 0,\n      verticalAlign: 'bottom',\n      y: 20,\n      floating: true,\n      borderColor: 'white',\n      borderWidth: 1,\n      shadow: false\n    },\n    tooltip: {\n      formatter: function formatter() {\n        return '<b>' + this.series.name + ':</b> ' + Math.abs(Math.round(this.y * 1000) / 10) + ' %';\n      }\n    },\n    plotOptions: {\n      column: {\n        stacking: 'normal',\n        dataLabels: {\n          enabled: false\n        }\n      }\n    },\n    series: [{\n      name: 'Rozhodně nesouhlasím',\n      color: '#d73027',\n      index: 2,\n      data: vals[0].map(function (v) {\n        return v * -1;\n      })\n    }, {\n      name: 'Spíše nesouhlasím',\n      color: '#fdae61',\n      index: 3,\n      data: vals[1].map(function (v) {\n        return v * -1;\n      })\n    }, {\n      name: 'Spíše souhlasím',\n      color: '#a6d96a',\n      index: 1,\n      data: vals[2]\n    }, {\n      name: 'Rozhodně souhlasím',\n      color: '#1a9641',\n      index: 0,\n      data: vals[3]\n    }]\n  });\n}\n\n;\ndrawChart('r01_i1');\n\ndocument.getElementById('q-sel').onchange = function () {\n  drawChart(this.selectedOptions[0].value);\n};\n\n//# sourceURL=webpack:///./js/script.js?");

/***/ }),

/***/ "./js/stats.js":
/*!*********************!*\
  !*** ./js/stats.js ***!
  \*********************/
/*! exports provided: data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"data\", function() { return data; });\nvar data = {\n  \"r01_a1\": [[0.0351038646140212, 0.10229976673620862, 0.4143771869161257, 0.4385637728727274], [0.05981624621018809, 0.11302593471918838, 0.3945938582918506, 0.41225728872345674], [0.026725993359923067, 0.06853282068305631, 0.30233025302667116, 0.5730375587163931], [0.021322160973512482, 0.06868766373860598, 0.3278914564324976, 0.5724097838638992], [0.0181465436627341, 0.0947793434535074, 0.35587665662184076, 0.5209046773494631], [0.014828896412867954, 0.04246118748770572, 0.27478469588530746, 0.6582580639480852]],\n  \"r01_a2\": [[0.31141761023980336, 0.27401274476597404, 0.2869598126607988, 0.10406277284775418], [0.34360591211631797, 0.31749450100742393, 0.2233725081218347, 0.0949289503300326], [0.18475600436582562, 0.29116061392648085, 0.3274484849228462, 0.13617170963576547], [0.18712041565674745, 0.2815179554724294, 0.3407459429918834, 0.13499828383398632], [0.16316173957607988, 0.2916347631383872, 0.3494142514105613, 0.1460320975247211], [0.13552287923128392, 0.23626495354585303, 0.3167017671930823, 0.23727624672476946]],\n  \"r01_k1\": [[0.12328000301824656, 0.48547080937364107, 0.2748397001654788, 0.05157936158828259], [0.12356293748947066, 0.523197766749413, 0.26507928126018376, 0.03205144181619989], [0.08593911663658746, 0.3867464691715093, 0.3467831469134094, 0.10946474331533815], [0.09435938114709815, 0.4242252343968458, 0.3484794588608258, 0.07748961687428944], [0.08624888341878176, 0.3652345188218917, 0.37365448240772214, 0.11715960232737395], [0.06522942254640625, 0.27636332763824917, 0.3682809995703631, 0.2355014598653791]],\n  \"r01_k2\": [[0.016178114256735137, 0.08045878186918029, 0.36264635633832526, 0.5228772260153783], [0.026364838299288932, 0.11299641536525405, 0.48174186615466286, 0.3727057234105544], [0.011713695191328607, 0.05632921811773902, 0.29986333002601095, 0.6184591180127132], [0.013528354398803868, 0.059647224946157824, 0.3260106988607025, 0.5822433089440668], [0.015419928328873296, 0.08288125520685373, 0.3367677798935404, 0.5386636682669298], [0.016423592267040675, 0.0487491735759094, 0.2474314889791377, 0.6669810851511518]],\n  \"r01_p1\": [[0.10448253116761902, 0.3144675946639967, 0.36062481216582165, 0.1740722004156441], [0.12820458052168193, 0.3197660211740594, 0.37460862665776923, 0.1440440809890369], [0.04867171651176429, 0.20560405825762912, 0.43714934039005054, 0.23803738490443452], [0.05021555096846376, 0.2542293573123784, 0.417735937784912, 0.2263277500898202], [0.04424362011738366, 0.20475560619069685, 0.44798328196172055, 0.23320420500594735], [0.029758534372715337, 0.16578635427756944, 0.4189986944762841, 0.33000656980456616]],\n  \"r01_p2\": [[0.07882395341418894, 0.2356955688185805, 0.4358938556205252, 0.1774118846522179], [0.08327007228723207, 0.2758397989661247, 0.40962054747557586, 0.13881032262915535], [0.029718299216770046, 0.13658909414156575, 0.500983325663823, 0.25394611528319616], [0.033291463567072514, 0.15754254866205766, 0.47771540998400763, 0.2607644511279464], [0.03603446097678566, 0.17179147032327144, 0.49099806894164055, 0.23368248207525916], [0.03654448581264247, 0.08387807976053203, 0.4487326855825567, 0.3803024446976402]],\n  \"r01_lp1\": [[0.19551178950944267, 0.31772708881390155, 0.30265514943690885, 0.151424383807896], [0.20216782679469072, 0.3244218826628129, 0.32303032990912645, 0.1055052255529864], [0.0872411179200614, 0.23484193294790096, 0.335043744477856, 0.27761044074968055], [0.0765207082071719, 0.23993040948164931, 0.39814908285846795, 0.2442717884610125], [0.08082421048875738, 0.22774075650331377, 0.3848152963677525, 0.23291447651951652], [0.04220634454317808, 0.15435138000466286, 0.3321874919243022, 0.437632688415013]],\n  \"r01_lp2\": [[0.05202940534933935, 0.317447092221327, 0.4127268930853839, 0.1632113148959351], [0.05701083462832147, 0.3200998864833734, 0.45078023878315476, 0.12096190155783364], [0.07142645981002547, 0.276032801471782, 0.36571348649435736, 0.15733580097756175], [0.061335044889482486, 0.3270438077939283, 0.4268574800391243, 0.11026036532025173], [0.057568233576806925, 0.2665932066874747, 0.40655390353884285, 0.13615962435929274], [0.07381165544797832, 0.19881207048411154, 0.40127810883717974, 0.22363843184341314]],\n  \"r01_n1\": [[0.06934828273563512, 0.3324460200053806, 0.4109128124017588, 0.14025278476865682], [0.08525588158602737, 0.38998867841025736, 0.3606417038987062, 0.12620862634186666], [0.025959906614948423, 0.20084050372517248, 0.44481273900848667, 0.2812996321060251], [0.04514691501368931, 0.17626590833819375, 0.4717519425489369, 0.2731223645648545], [0.03573198306439626, 0.1640817777516484, 0.477815707284754, 0.27212699931871764], [0.013644277366605131, 0.1024851998890664, 0.38444569655642474, 0.4537087035030321]],\n  \"r01_n2\": [[0.17370341050491334, 0.4023500694168091, 0.3394006267865568, 0.06532860599898112], [0.21863821932533806, 0.4554329367768555, 0.25986057477413366, 0.04983400387898419], [0.11248571279061115, 0.3197774558407881, 0.40784285842658746, 0.1295864460151753], [0.12417814838414551, 0.3058411036876789, 0.4350177502907015, 0.09226549816634448], [0.1238694260828042, 0.33547842771041364, 0.38836658152824943, 0.11708904956355587], [0.07817572062531233, 0.2553927886052428, 0.3904400903737937, 0.23304850521643616]],\n  \"r01_np1\": [[0.02661865794430237, 0.10278086206566771, 0.46536395004720693, 0.3780622644198449], [0.025492945480814915, 0.11726752669507916, 0.4666628136799211, 0.3450165612231833], [0.035070714553401265, 0.10848777249917478, 0.3993726856944318, 0.4225743764236283], [0.021698824447567693, 0.06450380823778414, 0.4453680547534657, 0.4359436358202736], [0.03552539605062549, 0.10073893366812704, 0.41875557523303936, 0.41007435129076575], [0.02464261579091673, 0.1179081294140332, 0.36008801897648185, 0.4758804903066995]],\n  \"r01_np2\": [[0.12775263083240976, 0.33011193014043866, 0.34908057727850367, 0.07930219269600025], [0.1763576674342129, 0.3527123291860191, 0.29967711448918144, 0.05425824652774311], [0.08073550879714228, 0.2834149244042444, 0.37968234220563796, 0.09539279874601435], [0.09231085342664185, 0.2639755950088359, 0.41424524107838456, 0.10759766947940382], [0.09832798289876205, 0.2828767497104685, 0.3931249958743245, 0.09946061280314487], [0.07924539547817346, 0.2808684645933476, 0.3635084036728603, 0.15539432058969596]],\n  \"r01_v1\": [[0.5064159668269269, 0.21221843758371597, 0.11778801187903792, 0.10896454405565882], [0.4257315896259203, 0.25334470825329597, 0.17262440165206586, 0.11621357854302941], [0.46597920669285986, 0.2561906996360258, 0.13746620279171623, 0.08048247598692926], [0.42566290141464325, 0.26887583897260026, 0.14600694673179454, 0.11372589830163735], [0.3954895577019164, 0.23481055916494076, 0.19051808504212078, 0.10331049668191479], [0.38726496165773705, 0.2092447449571619, 0.1594596838124267, 0.17513056710616196]],\n  \"r01_v2\": [[0.16939393365209357, 0.20471304384860675, 0.4113717910029148, 0.14865774694568185], [0.15974433088164525, 0.20622837970718427, 0.44733993948757456, 0.14914519955554922], [0.17047384425985906, 0.2193333147784355, 0.4013586585981035, 0.11698720986021398], [0.17031024378747558, 0.19582633373281452, 0.41566216931771255, 0.1463704493854744], [0.16720822544879732, 0.20098249575694252, 0.4012214688203543, 0.15588822842578873], [0.15190685001929533, 0.19810472622619066, 0.3092378275054979, 0.2623125421905758]],\n  \"r01_m1\": [[0.2304485636501913, 0.3781944104262799, 0.30438921276188097, 0.07594471234665905], [0.22332078242170245, 0.39879727655772806, 0.3120300653233794, 0.05805458001668389], [0.1701540536985849, 0.35093955681378414, 0.33944240332167386, 0.10148376849316938], [0.2033821035882429, 0.36728372829664796, 0.29959907811426895, 0.09727074517231957], [0.17300490390447076, 0.3467613115022259, 0.36082800223720823, 0.08737712231858856], [0.15103698886358632, 0.2797845257175148, 0.3664141653901976, 0.18688784618248677]],\n  \"r01_m2\": [[0.15887538025300174, 0.4027811506990177, 0.30362560127248167, 0.08372949989865403], [0.18060299971643914, 0.3744963122772846, 0.33116388995660956, 0.07727926857675847], [0.09414851275544721, 0.304595805308138, 0.37093015867812595, 0.15961986421714322], [0.12898324846469852, 0.36682821663117743, 0.3388287627657215, 0.12234237701480764], [0.0949720445320309, 0.311370977149184, 0.37489755302636246, 0.15321137163825985], [0.08814653572506607, 0.27431055375499686, 0.3747534164170612, 0.23622120848699465]],\n  \"r01_zj1\": [[0.13317041473385713, 0.25136401997423097, 0.35062509327355584, 0.2595514308251009], [0.13798032654884076, 0.266973352430889, 0.35305221622711813, 0.24199410479315206], [0.18478819391798265, 0.28622092067843596, 0.3232635732807136, 0.18175716031201566], [0.18844815183059954, 0.3511848008642167, 0.30055396385688526, 0.15161723886281708], [0.2030907627764424, 0.3419054261488217, 0.29164726753026465, 0.14056133338710858], [0.23104230181455668, 0.2591552328584119, 0.2627207749904084, 0.21119466524448302]],\n  \"r01_zj2\": [[0.038837610553107076, 0.1588462888548563, 0.48551081990709644, 0.31084369081523094], [0.023944808438318844, 0.13883325573169736, 0.4889146992347109, 0.3436459143264434], [0.08233383884708358, 0.22239773279380423, 0.47851690054579005, 0.1966597976089136], [0.08834472881978074, 0.23884835704297117, 0.44811355280568416, 0.20256896644809602], [0.07463540056205882, 0.26583888389480154, 0.4596455893057176, 0.17907348956054592], [0.15169601539381533, 0.24876364031704373, 0.390526302363781, 0.1782665623328789]],\n  \"r01_g1\": [[0.25087026788009054, 0.38314099682527497, 0.21248592364294916, 0.04104936378172749], [0.19943765088139148, 0.3753267315636201, 0.27633611322434437, 0.0500539146220574], [0.3652704395829723, 0.3552249096966928, 0.1083968558880656, 0.04658885074593995], [0.35787528388483486, 0.3277639966634544, 0.13553090246136398, 0.04928589022640894], [0.32721281120593027, 0.3291762339512309, 0.1572002480663834, 0.05798354054352592], [0.46407846462031654, 0.24327604149145843, 0.11766551002291076, 0.08606953450459248]],\n  \"r01_g2\": [[0.019992133759868556, 0.13224332756060667, 0.4205548523567474, 0.3263178889212865], [0.03299430405929949, 0.2340309429478863, 0.38021591055725135, 0.2571271830993318], [0.01186432755792985, 0.07933207192596463, 0.3491095001986406, 0.45318366664104537], [0.012003805316741141, 0.07074046596711268, 0.37004471568686514, 0.447108669439586], [0.01203203209689666, 0.09728247362152347, 0.3573271008162494, 0.4312833524810917], [0.013895059251932216, 0.048456164425968756, 0.3055686285658542, 0.5471019229977261]],\n  \"r01_g3\": [[0.05889582593360324, 0.31050380291574775, 0.4392164707626872, 0.13120085054621264], [0.06737656913642733, 0.369878439846456, 0.409346648282405, 0.10956943720231435], [0.026082280636933623, 0.2036567706870275, 0.5057522366856465, 0.18082783303386618], [0.041978045851781325, 0.2519371040746514, 0.4533639134659184, 0.18243291637563608], [0.04067492452663672, 0.221369145051841, 0.4645654643110111, 0.1870077244551616], [0.04109781375530281, 0.18633638567841768, 0.39927936231322575, 0.3005562562132039]],\n  \"r01_z1\": [[0.07949687157146278, 0.17466937556836254, 0.3339293978177235, 0.36133223490723665], [0.07371234330312369, 0.13027581973944263, 0.351615265507653, 0.4149883976865835], [0.1717624237074895, 0.2151871986966041, 0.3232809614517233, 0.1654509247113697], [0.13329119460142724, 0.18255206951469763, 0.35998350488382075, 0.2279367470304333], [0.15883297505982719, 0.2662429859249757, 0.31295632740013407, 0.1603104456626436], [0.21195096202107208, 0.251078484720103, 0.27879255879774195, 0.1699936736989417]],\n  \"r01_z2\": [[0.045418344817083976, 0.10057016266406806, 0.34091023235153545, 0.4199440835056023], [0.03140805362544867, 0.0988083285809173, 0.3565854848774493, 0.45373613351500175], [0.09323697607942165, 0.16690042016527554, 0.3727780868556221, 0.21625676116717152], [0.08590649697765747, 0.1595542860492023, 0.37536061967890627, 0.2445064613757682], [0.07889986176816781, 0.19523216994684722, 0.3563849463898542, 0.20924843496363857], [0.1375854209968122, 0.20894818920746927, 0.3329212886941391, 0.17809670938789332]],\n  \"r01_z3\": [[0.03493492840107686, 0.12557527166712368, 0.34886454526086164, 0.4009351414453579], [0.032098562549193174, 0.14018083680760646, 0.31417671341336806, 0.44454880182430295], [0.06540317104764107, 0.20816277629048424, 0.3092557550091104, 0.23834293469826587], [0.09105159339227784, 0.23253711015135475, 0.3665499654705437, 0.17062850473877758], [0.09090882710322033, 0.23868225492158307, 0.3305988397332889, 0.17247201642852725], [0.1678680876201685, 0.2307796169182105, 0.2806192126827181, 0.16134234954921817]],\n  \"r01_h1\": [[0.06055645285874457, 0.2617119308461104, 0.4833147198733467, 0.11562660307940546], [0.04621179749333894, 0.25100475158935864, 0.5043529432235533, 0.11138752251802014], [0.12697231263582845, 0.33979046584544, 0.35741390240379173, 0.06622279531182448], [0.11150423262479744, 0.30319934873053866, 0.40238970871000546, 0.09107912311349965], [0.12816100421646295, 0.3557125799251206, 0.34013882975979476, 0.050386398406765696], [0.21182102795642652, 0.3402242350033645, 0.28372153644565595, 0.05978999211631783]],\n  \"r01_h2\": [[0.052857168143476824, 0.3419060131614165, 0.37672614491509254, 0.16022368539940887], [0.0593091354021329, 0.39304936466730245, 0.33561220170989375, 0.1326746878316514], [0.019949792440558646, 0.1712395492710011, 0.41222835394734275, 0.2981069859332663], [0.017560363411888345, 0.22345979162362414, 0.4100657232775243, 0.2605211859689381], [0.025044777841352315, 0.1714178007866649, 0.4130150988429624, 0.29084622003486077], [0.027165004058862408, 0.11172403304231888, 0.3619876394982454, 0.4333769697671069]],\n  \"r01_i1\": [[0.08348692144126658, 0.2099006921557344, 0.2959009186112045, 0.33475139499675405], [0.15312733382228488, 0.26569837081029224, 0.31508681852062825, 0.2061117348294507], [0.01836292452266113, 0.1051655280559921, 0.304902086905908, 0.4825893272417854], [0.037524375462020795, 0.11362345956338181, 0.3218393732893312, 0.4524160913572532], [0.045289509473992816, 0.14765173717250624, 0.3152789593811655, 0.4366441215613439], [0.03231066731674725, 0.08255578094901453, 0.2705495838120183, 0.5750612523458203]],\n  \"r01_i2\": [[0.11370223631339191, 0.23204354425542717, 0.3127175052497722, 0.30950212137195693], [0.20933869131960467, 0.3050502021656041, 0.27197147111108577, 0.18746148044429797], [0.03560084585484064, 0.13751730316218558, 0.3117896259911787, 0.45808981180487646], [0.05276116294589993, 0.17261459731468173, 0.32545384548695255, 0.4166888214639872], [0.06546533961955911, 0.1642202536662479, 0.29591246273732075, 0.431643882277038], [0.03925402312672759, 0.12063579907971492, 0.28004240714145323, 0.5363358474115689]],\n  \"r01_i3\": [[0.13169130121595007, 0.29139719159393446, 0.26346294302352685, 0.2552487847325104], [0.2432198832452486, 0.323421661613577, 0.23313194312998178, 0.17426012568764598], [0.03808875910935352, 0.18224165285862903, 0.2980687261646093, 0.408182596628604], [0.06583324692368803, 0.18128247560575048, 0.3159617584472964, 0.3640866692395081], [0.07127795750323973, 0.17735652131857504, 0.3189764891068029, 0.3825524657875988], [0.04444922237849749, 0.137934935186171, 0.2846657563096527, 0.4923406250908483]],\n  \"r01_vz1\": [[0.03696388329443857, 0.1277641074302032, 0.4429043645165825, 0.2831126375398622], [0.056016478875781, 0.16181819966847139, 0.45269908866844355, 0.2304051381373731], [0.026767191164625066, 0.11502483323778476, 0.4310359623844827, 0.3402819300629775], [0.02043294396587305, 0.0852867219667492, 0.454531348529436, 0.38623501792070875], [0.030964910226481623, 0.10413222628152237, 0.46768189808483124, 0.3093392159563567], [0.030642870206296125, 0.08349631799538224, 0.33554849544327303, 0.4860441725177113]],\n  \"r01_vz2\": [[0.14210816539368668, 0.3621001614662783, 0.31689474433643927, 0.13767853945115816], [0.17002156381145545, 0.40098862207573555, 0.2834137895374361, 0.10011790411844107], [0.18356416254194702, 0.34023363844185306, 0.2809756820285992, 0.129771779293622], [0.19888815054117148, 0.3858306600100654, 0.2674754559294054, 0.10909873958748385], [0.18170233508833808, 0.39684784629625997, 0.2596150643409087, 0.10539181595192135], [0.23160430025835613, 0.35626959047055007, 0.22290120826829565, 0.14569620894519994]],\n  \"r01_e1\": [[0.040451998207077754, 0.13700948784481598, 0.38598067668059366, 0.3974040233928245], [0.024248908108620168, 0.1379794275201595, 0.32337560893962247, 0.4804877379789466], [0.029965560756374812, 0.10323699366280635, 0.39067376329477255, 0.42156974891860965], [0.028721511439133086, 0.12827942356607439, 0.36967353538908454, 0.43583235762084516], [0.023542590933300616, 0.09471924167359465, 0.4070361222981406, 0.4429047490553641], [0.03692308863232059, 0.0991206538378678, 0.35449643055885105, 0.4660220929699486]],\n  \"r01_e2\": [[0.11087623643779648, 0.24945827377194157, 0.4173643121010741, 0.14862101223341426], [0.06267902157524678, 0.16948756971052845, 0.46095106966375377, 0.24066870844155622], [0.156036015302966, 0.3068781383638382, 0.323294420495956, 0.09244108314613382], [0.13322970569236614, 0.2456110992774844, 0.38075212510031836, 0.1637486936005752], [0.12695108445350206, 0.22902761295117158, 0.3953830307093521, 0.14508256534894265], [0.23379819791013076, 0.2607688351346041, 0.2809051475096741, 0.12203076203395316]],\n  \"r01_ind1\": [[0.08211777218064847, 0.2935671398726069, 0.4574132208974415, 0.1455205241190686], [0.1035523777350354, 0.3299583909537405, 0.4435695902742575, 0.09333942383698633], [0.052416939201002814, 0.2510983362615582, 0.4294866094554601, 0.23968927980718982], [0.06240429247856004, 0.19251382656965166, 0.5229969495639071, 0.17542581563495466], [0.055058979201877106, 0.24915525973844, 0.47837164945095, 0.18555186138570776], [0.027209904327333098, 0.15208716285612967, 0.4235535480353383, 0.3658049036054128]],\n  \"r01_pol1\": [[0.09732948987909645, 0.36359240360738126, 0.37226475785950136, 0.11289020440212023], [0.10224091536507957, 0.3969995986781711, 0.33038273066697516, 0.10040829547936882], [0.07416425240483912, 0.27609191930914107, 0.36071261544036287, 0.18017578827761715], [0.08000552969190142, 0.3170092530709418, 0.3546936785207123, 0.16107812335502078], [0.053056494091258406, 0.305339054457356, 0.38228282986813095, 0.15748233712752965], [0.054171092981568476, 0.20169214784974884, 0.3846709410683541, 0.288643760177109]],\n  \"r01_pos1\": [[0.04405566888908223, 0.3048261387412091, 0.5214188614959221, 0.05446759897384892], [0.04610744437675141, 0.3220521539086269, 0.5238639095223717, 0.04611768478704323], [0.0694347468283916, 0.35324621621876195, 0.42959323519745607, 0.04005727308756794], [0.06795405116414162, 0.2814534980132125, 0.47821082817420096, 0.062419289679846224], [0.07491994863048071, 0.3527713812515841, 0.40514582859602094, 0.05076928271682152], [0.13527014296876697, 0.3624071230837268, 0.34121658108483066, 0.06968855393477853]]\n};\n\n//# sourceURL=webpack:///./js/stats.js?");

/***/ })

/******/ });