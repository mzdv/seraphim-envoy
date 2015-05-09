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
            previousCount: null,
            value: null,
            getCounter: null,
            postCounter: null,
            putCounter: null,
            patchCounter: null,
            deleteCounter: null
        });
    },
    componentDidMount: function() {
        // logic for determining what the hell is coming to the pillbox
        // socket.io logic here
        var reactContext = this;    // we are doing this so we can save the current context before switching to socket.io
        setInterval(reactContext.verbNumberPayload, 5000);
    },
    totalCounter: function() {
        return(
            this.state.getCounter + this.state.postCounter + this.state.putCounter + this.state.patchCounter + this.state.deleteCounter
        )
    },
    updateVerbs: function() {
        // logic for updating verbs that injects into componentDidMount
    },
    verbNumberPayload: function() {
        // logic for MongoDB payload sending
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
