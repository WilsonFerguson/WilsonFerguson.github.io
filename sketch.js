let weather;
let p;

let urlTemplate = 'https://api.weather.gov/points/';
let lat = '';
let long = '';
let url = urlTemplate + lat + ',' + long;

let latInput, longInput;

function setup() {
    noCanvas();
    p = document.getElementById('weather');
    latInput = document.getElementById('latInput');
    longInput = document.getElementById('longInput');
    //loadJSON('https://api.weather.gov/points/47.606209,-122.332069', gotData);
}

function gotData(data) {
    print(data);
    let url = data.properties.forecast;
    loadJSON(url, gotFinalData);
}

function gotFinalData(data) {
    let weatherJSON = data;
    weather = weatherJSON.properties.periods[0].detailedForecast;
}

function draw() {
    lat = latInput.value;
    long = longInput.value;
    if (lat != "" && long != "") {
        url = urlTemplate + lat + ',' + long;
        loadJSON(url, gotData);  
    }
    if (weather) p.innerHTML = weather;
}