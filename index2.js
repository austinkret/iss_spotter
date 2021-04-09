const { nextISSTimesForMyLocation } = require('./iss_promised');
const { nextPassTimes } = require('./nextPassTime');

nextISSTimesForMyLocation()
  .then(passTimes => { 
    nextPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("Uh-Oh, something went wrong! This is what we got back: ", error.message);
  });