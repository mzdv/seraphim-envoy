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

                <ReactHeader name="Last request" description=""/>
                <ReactHeader name="From" description=""/>
                <ReactHeader name="To" description=""/>
                <ReactHeader name="Headers" description=""/>
                <ReactHeader name="Content" description=""/>

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
