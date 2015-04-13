var React = require('react');

var ReactTime = React.createClass({
    render: function() {
        return(
            React.createElement('div', {id: 'entry'}, this.props.description)
        );
    }
});

module.exports = ReactTime;