var axios = require('axios');

const WUNDERGROUND_URI = 'http://api.wunderground.com/api/cff586f7a4a55e71/conditions/q/NC/';


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
