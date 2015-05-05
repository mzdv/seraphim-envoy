var React = require('react');

var ReactCounter = require('./ReactCounter.jsx');
var ReactHeader = require('./ReactHeader.jsx');


var Title = React.createClass({
    render: function() {
        return(
          <h1>
              {this.props.appTitle}
          </h1>
        );
    }
});

var ReactApp = React.createClass({
    render: function() {
        return(
            <div className="frontend">
                <Title appTitle="Seraphim Envoy" />

                <h3>Current stats:</h3>

                <ReactHeader name="Last request" value=""/>
                <ReactHeader name="From" value=""/>
                <ReactHeader name="To" value=""/>
                <ReactHeader name="Headers" value=""/>
                <ReactHeader name="Content" value=""/>

                <h3>Counters:</h3>

                <ReactCounter verb="GET" value="" />
                <ReactCounter verb="POST" value="" />
                <ReactCounter verb="PUT" value="" />
                <ReactCounter verb="PATCH" value="" />
                <ReactCounter verb="DELETE" value="" />

            </div>
        );
    }
});

module.exports = ReactApp;
