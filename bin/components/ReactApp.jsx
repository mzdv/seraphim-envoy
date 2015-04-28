var React = require('react');

var ReactCounter = require('./ReactCounter.jsx');
var ReactHeader = require('./ReactHeader.jsx');
var ReactTime = require('./ReactTime.jsx');


var Title = React.createClass({
    render: function() {
        return(
          React.createElement('h1', null, this.props.appTitle)
        );
    }
});

var ReactApp = React.createClass({
    render: function() {
        return(
            <div className="frontend">
                <Title appTitle="Seraphim Envoy"/>
                <ReactTime />

                <ReactHeader />
                <ReactHeader />
                <ReactHeader />
                <ReactHeader />
                <ReactHeader />

                <ReactCounter />
                <ReactCounter />
                <ReactCounter />
                <ReactCounter />
                <ReactCounter />

            </div>
        );
    }
});

module.exports = ReactApp;
