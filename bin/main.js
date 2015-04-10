var React = require('react');

var ReactApp = React.createFactory(require('').app);

var bootstrap = document.getElementById('react-bootstrap');

react.renderComponent(new ReactApp({

}), bootstrap);