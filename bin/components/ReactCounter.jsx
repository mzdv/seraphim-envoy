var React = require('react');

var ReactTitle = React.createClass({
   render: function() {
       return(
         React.createElement('div', {className: 'title'},'')
       );
   }
});

var ReactCounter = React.createClass({
    render: function() {
        return(
            React.createElement('div', {className: 'counter'},'')
        );
    }
});

var ReactTimestamp = React.createClass({
    render: function() {
        return(
            React.createElement('div', {className: 'title'},'')
        );
    }
});

var ReactCounter = React.createClass({
    render: function() {
        return(
            <div class="counterBlock">
                <ReactTitle />
                <ReactCounter />
                <ReactTimestamp />
            </div>
        )
    }
});

module.exports = ReactCounter;