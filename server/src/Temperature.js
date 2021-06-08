const axios = require("axios");
const propObj = require("../properites.js");

async function getTemperature(city) {
    try {
        // console.log(city);
        console.log(propObj.properties);
        const apiKey = propObj.properties.apiKey;
        console.log(apiKey);
        const url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&'+apiKey;
        const response = await axios.get(url);
        let {data} = response;
    //   console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
}


module.exports.getTemperature = getTemperature;