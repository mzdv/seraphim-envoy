var React = require('react');

var Pillbox = require('./Pillbox.jsx');
var Graph = require('./Graph.jsx');

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

                <h3>Current stats</h3>

                <Pillbox name="Last request" />
                <Pillbox name="From" />
                <Pillbox name="To" />
                <Pillbox name="Headers" />
                <Pillbox name="Content" />

                <h3>Counters</h3>

                <Pillbox name="GET" />
                <Pillbox name="POST" />
                <Pillbox name="PUT" />
                <Pillbox name="PATCH" />
                <Pillbox name="DELETE" />

                <h3>Graphs</h3>
                <Graph />

            </div>
        );
    }
});

module.exports = ReactApp;
