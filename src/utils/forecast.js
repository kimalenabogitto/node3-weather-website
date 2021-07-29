const request = require("request");

forecast = (latitude, longitude, callback) => {
  furl =
    "http://api.weatherstack.com/current?access_key=8fdc546523c7855242df743eecbd9b78&query=" +
    latitude +
    "," +
    longitude +
    "&units=m";

  request({ url: furl, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather services");
    } else if (body.error) {
      callback("Unable to find location");
    } else {
      callback(
        undefined,
        `Experiencing: ${body.current.weather_descriptions[0]} Temperature: ${body.current.temperature}°C FeelsLike: ${body.current.feelslike}°C`
      );
    }
  });
};
module.exports = forecast;
