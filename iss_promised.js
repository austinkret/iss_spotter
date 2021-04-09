const request = require('request-promise-native');

const fetchMyIP = () => {
  return request(`https://api.ipify.org?format=json`);
};
  
const fetchCoordsByIP = (body) => {
  const ipData = JSON.parse(body).ip;
  return request(`https://freegeoip.app/json/${ipData}`);
};

const fetchISSFlyOverTimes = (body) => {
  const location = {
    latitude: JSON.parse(body).latitude,
    longitude: JSON.parse(body).longitude
  };
  return request(`http://api.open-notify.org/iss-pass.json?lat=${location.latitude}&lon=${location.longitude}`);
};

const nextISSTimesForMyLocation = (body) => {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((data) => {
      const { response } = JSON.parse(data);
      return response;
    });
};

module.exports = {
  nextISSTimesForMyLocation
};
