const user = process.env.geo_ApiKey;
const fetch = require('node-fetch');

async function getGeoLocation(city) {

     let link = `http://api.geonames.org/searchJSON?q=${city}&maxRows=10&username=${user}`;

     try {

        const getData = async (url) => {
            let result = await fetch(url);
            let data = result.json();
            return data;
        }

        const geoData = await getData(link);

        const coord = {
            lat: geoData.geonames[0].lat,
            lng: geoData.geonames[0].lng
        }

        return coord;
     } catch {
         console.log("Error - Name");
     }
}

module.exports = getGeoLocation;
