var React = require('react');

var Field = React.createClass({
    render: function() {
        return(
            <h3>{this.props.name}</h3>
        );
    }
});

var Descriptor = React.createClass({
    render: function() {
        return(
            <div id="entry">
                {this.props.description}
            </div>
        );
    }
});

var ReactHeader = React.createClass({
    render: function() {
        return(
            <div className="headerBlock">
                <Field name={this.props.name}/>
                <Descriptor description={this.props.description}/>
            </div>
        );
    }
});

module.exports = ReactHeader;
