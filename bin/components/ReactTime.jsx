var React = require('react');

var ReactTime = React.createClass({

    getInitialState: function() {
       return ({
           currentTime: null
       })
    },

    componentDidMount: function() {
        this.interval = setInterval(this.tick, 1000) ;
    },

    tick: function() {
        this.setState({
            currentTime: (new Date()).toString()
        });
    },

    componentWillUnmount: function() {
        clearInterval(this.interval);
    },

    render: function() {
        return(
            <div className="currentTime">
                {this.state.currentTime}
            </div>
        );
    }
});

module.exports = ReactTime;