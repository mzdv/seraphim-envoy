var React = require('react');

var Title = React.createClass({
    render: function() {
        return(
            <h3>
                {this.props.title}
            </h3>
        );
    }
});

var Counter = React.createClass({
    render: function() {
        return(
            <div id={this.props.verb}>
                {this.props.value}
            </div>
        );
    }
});

var ReactCounter = React.createClass({
    render: function() {
        return(
            <div className="requestCounter">
                <Title title={this.props.verb + ':'}/>
                <Counter verb={this.props.verb} value={this.props.value}/>
            </div>
        );
    }
});

module.exports = ReactCounter;