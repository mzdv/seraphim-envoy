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
    render: function() {
        return(
            <div id="entry">
                {this.props.value}
            </div>
        );
    }
});

var Pillbox = React.createClass({
    render: function() {
        return(
            <div className="headerBlock">
                <Field name={this.props.name + ':'}/>
                <Descriptor value={this.props.value}/>
            </div>
        );
    }
});

module.exports = Pillbox;
