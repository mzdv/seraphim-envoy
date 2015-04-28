var React = require('react');

var Field = React.createClass({
    render: function() {
        return(
            React.createElement('h3', null, this.props.name)
        );
    }
});

var Descriptor = React.createClass({
    render: function() {
        return(
            React.createElement('div', {id: 'entry'}, this.props.description)
        );
    }
});

var ReactHeader = React.createClass({
    render: function() {
        return(
            <div className="headerBlock">
                <Field />
                <Descriptor />
            </div>
        );
    }
});

module.exports = ReactHeader;
