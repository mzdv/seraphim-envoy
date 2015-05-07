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

                <Pillbox name="Last request" value=""/>
                <Pillbox name="From" value=""/>
                <Pillbox name="To" value=""/>
                <Pillbox name="Headers" value=""/>
                <Pillbox name="Content" value=""/>

                <h3>Counters</h3>

                <Pillbox name="GET" value="" />
                <Pillbox name="POST" value="" />
                <Pillbox name="PUT" value="" />
                <Pillbox name="PATCH" value="" />
                <Pillbox name="DELETE" value="" />

                <h3>Graphs</h3>
                <Graph />

            </div>
        );
    }
});

module.exports = ReactApp;
