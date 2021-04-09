const { /*fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes,*/ nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((error, ipData) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned IP: ', ipData);
// });

// let ipData = '';

// fetchCoordsByIP(ipData, (error, data) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned Geo IP: ', data);
// });

// let location = { latitude: 49.2825, longitude: -123.1291 };

// fetchISSFlyOverTimes(location, (error, data) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! The flyover times are: ', data);
// });

const nextPassTimes = (passTimes) => {
  for (const pass of passTimes) {
    let datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`The next date and time that the ISS will pass at is ${datetime}, and it will be there for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  nextPassTimes(passTimes);
});