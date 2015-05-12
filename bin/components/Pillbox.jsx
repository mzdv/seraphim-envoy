var React = require('react');

var Field = React.createClass({
    render: function() {
        return(
            <p>
                {this.props.name}
            </p>
        );
    }
});

var Descriptor = React.createClass({
    getInitialState: function() {
        return({
            previousCount: 0,
            value: 0,
            getCounter: 0,
            postCounter: 0,
            putCounter: 0,
            patchCounter: 0,
            deleteCounter: 0,
            totalCounter: 0,
            socket: null            // just testing something here
        });
    },
    componentDidMount: function() {
        // logic for determining what the hell is coming to the Pillbox
        // socket.io logic here
        //var reactContext = this;    // we are doing this so we can save the current context before switching to socket.io
        this.state.socket = io().connect("http://localhost:3000");
        this.state.socket.on("http", function(data) {
            this.updateVerbs(data);

            _.forEach(['request', 'from', 'to', 'headers', 'content'], function(n) {
                this.state[n] = data[n];
            })
        });

        setInterval(this.verbNumberPayload, 5000);
    },
    totalCounter: function() {
        return(
            this.state.getCounter + this.state.postCounter + this.state.putCounter + this.state.patchCounter + this.state.deleteCounter
        )
    },
    updateVerbs: function(data) {
        // logic for updating verbs that injects into componentDidMount
        if(_.includes(['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], data.request)) {
            var verb = data.request.toLowerCase();
            this.state[verb + 'Counter']++;
            this.state.totalCounter = this.totalCounter();
        }
    },
    verbNumberPayload: function() {
        // logic for MongoDB payload sending
        if(this.state.previousCount !== this.state.totalCounter) {
            var totalCounter = this.state.totalCounter;
            var totalRequests = {
                requests: totalCounter,
                timestamp: new Date()
            };
            this.state.previousCount = totalCounter;
            this.state.socket.emit('totalRequests', JSON.stringify(totalRequests));
        }
    },
    render: function() {
        return(
            <div id="entry">
                {this.state.value}
            </div>
        );
    }
});

var Pillbox = React.createClass({
    render: function() {
        return(
            <div className="pillBlock">
                <Field name={this.props.name + ':'} />
                <Descriptor />
            </div>
        );
    }
});

module.exports = Pillbox;
