var react = require('react');

var ReactTime = react.createClass({
    render: function() {
        return(
            React.createElement('div', {id: 'entry'}, this.props.description)
        );
    }
});

module.exports = ReactTime;