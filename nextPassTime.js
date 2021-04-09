const nextPassTimes = (passTimes) => {
  for (const pass of passTimes) {
    let datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`The next date and time that the ISS will pass at is ${datetime}, and it will be there for ${duration} seconds!`);
  }
};

module.exports = {
  nextPassTimes
}