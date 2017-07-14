var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=e20eada2cc94bf3675558bbf70b3de2b&units=imperial';
const DARK_SKIES_URI = 'https://api.darksky.net/forecast/65df6742b3ddd47a7d59c85e36477f9f/';
const GOOGLE_MAPS_BASE_URI = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
const GOOGLE_MAPS_API_KEY = 'AIzaSyChPqMITbwTLqUTwrXy8HovNY9VPzzaxL0';
// todo: use individual URIs
const DARK_SKIES_BASE_URI = 'https://api.darksky.net/forecast/';
const DARK_SKIES_SECRET = '65df6742b3ddd47a7d59c85e36477f9f';
const URI_SEPERATOR = '/';

// e20eada2cc94bf3675558bbf70b3de2b

module.exports = {
  getTemp: function (location){
    return this.getLatLongForLocation(location).then(this.getTempFromDarkSkies, this.onError);
  },

  getLatLongForLocation: function (location) {
    console.log(location);
    var encodedLocation = encodeURIComponent(location);
    // get the lat/long from the location name
    var googleMapsRequestUrl = `${GOOGLE_MAPS_BASE_URI}${encodedLocation}&key=${GOOGLE_MAPS_API_KEY}`;

    return axios.get(googleMapsRequestUrl).then(function (response){
      if (!response.data.results) {
        // handle exceptions/errors for undefined locations
        console.log("errors");
        throw new Error(response.data.message);
      } else {
        console.log(response.data);
        return response.data.results[0].geometry.location;
      }
    }, function (err) {
      throw new Error('Unable to get weather for that location.');
    });
  },
  
  getTempFromDarkSkies: function (geoCoordinates){
    console.log(geoCoordinates.lat);
    console.log(geoCoordinates.lng);
    return axios.get(DARK_SKIES_URI +  geoCoordinates.lat + ',' + geoCoordinates.lng).then(function (response){
      console.log(response);
      if (!response) {
        // handle exceptions/errors for undefined locations
        console.log("errors");
        throw new Error(response.data.message);
      } else {
        console.log(response.currently.temperature);
        return response.currently.temperature;
      }
    }, function (err) {
      throw new Error('Unable to get weather for that location.');
    });
  },
  onError: function () {
    console.log("oops");
  }
}
