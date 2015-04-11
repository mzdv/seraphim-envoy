var React = require('react');

var ReactTitle = React.createClass({
   render: function() {
       return(
         React.createElement('div', {className: 'title'}, this.props.title)
       );
   }
});

var ReactData = React.createClass({
    render: function() {
        return(
            React.createElement('div', {className: 'counter'}, this.props.data)
        );
    }
});

var ReactTimestamp = React.createClass({
    render: function() {
        return(
            React.createElement('div', {className: 'title'}, this.props.timestamp)
        );
    }
});

var ReactCounter = React.createClass({
    render: function() {
        return(
            <div class="counterBlock">
                <ReactTitle />          // figure out a way to bind data here from the backend
                <ReactData />
                <ReactTimestamp />
            </div>
        );
    }
});

module.exports = ReactCounter;