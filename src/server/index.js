const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express()

app.use(express.static('dist'))
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

let data = {};

let setPicture = require('./pixabay-API');
let getGeoLocation = require('./geonames-API');
let getWeatherData = require('./dark_sky-API');
let getDates = require('./dates');

app.post("/api", (req, res) => {
    console.log(req.body.name);
    apiCalls(req.body);
    async function apiCalls(info) {
        data.img = await setPicture(info.name);
        data.coord = await getGeoLocation(info.name);
        data.weather = await getWeatherData(data.coord);
        data.dates = await getDates(info.dates);
        console.log(data);
        res.send(data);
    }
});

module.exports = data;


