var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=e20eada2cc94bf3675558bbf70b3de2b&units=imperial';
const GOOGLE_MAPS_BASE_URI = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
const GOOGLE_MAPS_API_KEY = 'AIzaSyChPqMITbwTLqUTwrXy8HovNY9VPzzaxL0';
// todo: use individual URIs
const WUNDERGROUND_URI = 'http://api.wunderground.com/api/cff586f7a4a55e71/conditions/q/NC/';

// e20eada2cc94bf3675558bbf70b3de2b

module.exports = {
  getTemp: function (location){
    return this.getTempFromWunderground(location);
  },

  getTempFromWunderground: function (location) {
    var encodedLocation = encodeURIComponent(location);

    // Getting the data from WUnderground
    var wUndergroundRequestUrl = `${WUNDERGROUND_URI}${encodedLocation}.json`;

    return axios.get(wUndergroundRequestUrl).then(function (response){
      console.log(response);
      if (!response.data.current_observation) {
        // handle exceptions/errors for undefined locations
        throw new Error(response.data.response.error.description);
      } else {
        return response.data.current_observation.temp_f;
      }
    }, function (err) {
      throw new Error('Unable to get weather for that location.');
    });
  }
}

//   getTempFromDarkSkies: function (geoCoordinates){
//     console.log(geoCoordinates.lat);
//     console.log(geoCoordinates.lng);
//     return axios.get(DARK_SKIES_URI +  geoCoordinates.lat + ',' + geoCoordinates.lng).then(function (response){
//       console.log(response);
//       if (!current_observation) {
//         // handle exceptions/errors for undefined locations
//         console.log(error.description);
//         throw new Error(error.description);
//       } else {
//         console.log(current_observation.display_location.full);
//         return current_observation.temp_f;
//       }
//     }, function (err) {
//       throw new Error('Unable to get weather for that location.');
//     });
//   },
//   onError: function () {
//     console.log("oops");
//   }
// }
