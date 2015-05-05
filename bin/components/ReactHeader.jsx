var React = require('react');

var Field = React.createClass({
    render: function() {
        return(
            <h3>
                {this.props.name}
            </h3>
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

var ReactHeader = React.createClass({
    render: function() {
        return(
            <div className="headerBlock">
                <Field name={this.props.name}/>
                <Descriptor value={this.props.value}/>
            </div>
        );
    }
});

module.exports = ReactHeader;
