var React = require('react');

var WeatherMessage = (props) => {
  return (
    <div>
      <h3>It is {props.temp} degrees in {props.location}</h3>
    </div>
  );
};

module.exports = WeatherMessage;
