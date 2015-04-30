var React = require('react');

var ReactTime = React.createClass({
    x: (new Date()).toString(),

    getInitialState: function() {
       return ({
           currentTime: 0
       })
    },

    componentDidMount: function() {
        //this.tick();                                  // WHY WON'T THIS FUCKER WORK
        this.interval = setInterval(this.tick, 1000);
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