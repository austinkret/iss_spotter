const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

fetchMyIP((error, ipData) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log('It worked! Returned IP: ', ipData);
});

let ipData = '';

fetchCoordsByIP(ipData, (error, data) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log('It worked! Returned Geo IP: ', data);
});

let location = { latitude: 49.2825, longitude: -123.1291 };

fetchISSFlyOverTimes(location, (error, data) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log('It worked! The flyover times are: ', data);
});