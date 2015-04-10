var React = require('react');

var ReactApp = React.createFactory(require('./components/ReactApp.jsx'));

var bootstrap = document.getElementById('react-bootstrap');

react.renderComponent(new ReactApp({}), bootstrap);