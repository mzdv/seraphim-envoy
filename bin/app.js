'use strict'

var React = require('react');
var App = React.createFactory(require('./components/ReactApp.jsx'));

//React.render(App(), document.getElementById('content'));
React.render(React.createFactory(App)(), document.getElementById('content'));
