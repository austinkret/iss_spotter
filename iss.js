const request = require('request');

const fetchMyIP = (callback) => {
  request(`https://api.ipify.org?format=json`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const message = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(message), null);
      return;
    }
    const ipData = JSON.parse(body).ip;
    callback(null, ipData);
  });
};

const fetchCoordsByIP = (ipData, callback) => {
  request(`https://freegeoip.app/json/${ipData}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const message = `Status Code ${response.statusCode} when fetching the GeoIP. Response: ${body}`;
      callback(Error(message), null);
      return;
    }
    const location = {
      latitude: JSON.parse(body).latitude,
      longitude: JSON.parse(body).longitude
    };
    callback(null, location);
  });
};

const fetchISSFlyOverTimes = function(location, callback) {
  request(`http://api.open-notify.org/iss-pass.json?lat=${location.latitude}&lon=${location.longitude}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const message = `Status Code ${response.statusCode} when fetching the flyover times of the ISS. Response: ${body}`;
      callback(Error(message), null);
      return;
    }
    const flyOver = JSON.parse(body).response;
    callback(null, flyOver);
  });
};


module.exports = {
  fetchMyIP,
  fetchCoordsByIP,
  fetchISSFlyOverTimes
};