var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>
        This is a weather application built in React. I have built
        this app as part of a React course in Udemy. I am currently working on
        implementing some other cool features to showcase through this app.
      </p>
      <p>
        Here are some of the tools I have used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the
          Javascript framework used for the app.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I utilized
          the API from Open Weather Map to search and retrieve weather data for
          the desired city.
        </li>
        <li>
          <a href="https://github.com/juicydrey/ReactWeather">GitHub</a> - Source
          control was done through Git and hosted on GitHub. The project's repo can
          be found in the link.
        </li>
        <li>
          <a href="https://www.heroku.com/">Heroku</a> - The app is deployed
          through Heroku.
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
