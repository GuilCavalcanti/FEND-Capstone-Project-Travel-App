const key = process.env.darkSky_ApiKey;
const fetch = require('node-fetch');

async function getWeatherData(coord) {

    try {
        link = `https://api.darksky.net/forecast/${key}/${coord.lat},${coord.lng}?units=si`

    const getData = async (url) => {
        let result = await fetch(url);
        let data = result.json();
        return data;
    }

    const data = await getData(link);

    let weatherData = {
        weatherSum: data.currently.summary,
        weatherTemp: data.currently.temperature
    }

    return weatherData;
    } catch {
        console.log("Error - Weather");
    }
}

module.exports = getWeatherData;
