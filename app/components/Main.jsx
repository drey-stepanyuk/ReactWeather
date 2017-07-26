var React = require('react');
var Nav = require('Nav');
var AppFooter = require ('AppFooter');

var Main = (props) => {
  return (
    <div>
      <Nav/>
      <div className="row">
        <div className="columns medium-6 large-4 small-centered">
          {props.children}
        </div>
      </div>
    <AppFooter/>
    </div>
  );
};

module.exports = Main;
