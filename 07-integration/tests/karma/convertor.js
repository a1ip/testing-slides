const value = document.getElementById('value');
const from = document.getElementById('from');
const to = document.getElementById('to');
const send = document.getElementById('send');
const result = document.getElementById('result');

function isValid() {
    return !isNaN(value.value) &&
        availableUnits.includes(from.value) &&
        availableUnits.includes(to.value);
}

function change() {
    isValid() ?
        send.removeAttribute('disabled'):
        send.setAttribute('disabled', 'disabled');
}

function convert() {
    const url = `/convert?value=${value.value}&from=${from.value}&to=${to.value}`;
    fetch(url)
        .then(res => res.json())
        .then(ansnwer => result.value = ansnwer.result);
}
const availableUnits = [
    'mm',
    'cm',
    'm',
    'km',
    'in',
    'yd',
    'ft',
    'mi',
    'mm2',
    'cm2',
    'm2',
    'ha',
    'km2',
    'in2',
    'yd2',
    'ft2',
    'ac',
    'mi2',
    'mcg',
    'mg',
    'g',
    'kg',
    'oz',
    'lb',
    'mm3',
    'cm3',
    'ml',
    'cl',
    'dl',
    'l',
    'kl',
    'm3',
    'km3',
    'krm',
    'tsk',
    'msk',
    'kkp',
    'glas',
    'kanna',
    'tsp',
    'Tbs',
    'in3',
    'fl-oz',
    'cup',
    'pnt',
    'qt',
    'gal',
    'ft3',
    'yd3',
    'ea',
    'C',
    'K',
    'F',
    'ns',
    'mu',
    'ms',
    's',
    'min',
    'h',
    'd',
    'week',
    'month',
    'year',
    'b',
    'Kb',
    'Mb',
    'Gb',
    'Tb',
    'B',
    'KB',
    'MB',
    'GB',
    'TB',
    'ppm',
    'ppb',
    'ppt',
    'ppq',
    'm/s',
    'km/h',
    'm/h',
    'knot',
    'ft/s',
    'Pa',
    'kPa',
    'MPa',
    'hPa',
    'bar',
    'torr',
    'psi',
    'ksi',
    'A',
    'mA',
    'kA',
    'V',
    'mV',
    'kV',
    'W',
    'mW',
    'kW',
    'MW',
    'GW',
    'VAR',
    'mVAR',
    'kVAR',
    'MVAR',
    'GVAR',
    'VA',
    'mVA',
    'kVA',
    'MVA',
    'GVA',
    'Wh',
    'mWh',
    'kWh',
    'MWh',
    'GWh',
    'J',
    'kJ',
    'VARh',
    'mVARh',
    'kVARh',
    'MVARh',
    'GVARh',
    'mm3/s',
    'cm3/s',
    'ml/s',
    'cl/s',
    'dl/s',
    'l/s',
    'l/min',
    'l/h',
    'kl/s',
    'kl/min',
    'kl/h',
    'm3/s',
    'm3/min',
    'm3/h',
    'km3/s',
    'tsp/s',
    'Tbs/s',
    'in3/s',
    'in3/min',
    'in3/h',
    'fl-oz/s',
    'fl-oz/min',
    'fl-oz/h',
    'cup/s',
    'pnt/s',
    'pnt/min',
    'pnt/h',
    'qt/s',
    'gal/s',
    'gal/min',
    'gal/h',
    'ft3/s',
    'ft3/min',
    'ft3/h',
    'yd3/s',
    'yd3/min',
    'yd3/h'
];
