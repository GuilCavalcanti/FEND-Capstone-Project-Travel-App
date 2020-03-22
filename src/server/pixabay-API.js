const fetch = require('node-fetch');
const key = process.env.pixa_ApiKey;

async function setPicture(city) {

    try {
        const getData = async (url) => {
            let result = await fetch(url);
            let data = await result.json(); 
            console.log(data);
            return data;
        }
    
        const imgsrc = await getData(`https://pixabay.com/api/?key=${key}&q=${city}&image_type=photo`);
        const img = imgsrc.hits[2].webformatURL;
    
        return img;
    } catch {
        console.log("Error - No Image available");
        const img = "https://cdn.pixabay.com/photo/2016/10/06/19/59/sign-1719892_960_720.png";

        return img;
    }
}

module.exports = setPicture;

