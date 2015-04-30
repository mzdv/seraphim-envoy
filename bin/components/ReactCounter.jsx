var React = require('react');

var CounterTitle = React.createClass({
    render: function() {
        return(
            React.createElement('h3', null, this.props.title)
        );
    }
});

var FreshData = React.createClass({
    render: function() {
        return(
            React.createElement('div', {id: this.props.id}, this.props.data)
        );
    }
});

var Timestamp = React.createClass({
    render: function() {
        return(
            React.createElement('div', {id: this.props.id}, this.props.timestamp)
        );
    }
});

var ReactCounter = React.createClass({
    render: function() {
        return(
            <div className="counterBlock">
                <CounterTitle />
                <FreshData />
                <Timestamp />
            </div>
        );
    }
});

module.exports = ReactCounter;