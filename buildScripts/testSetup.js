//this file is not transpiled so must use commonJs and es5


//Register babel to transpile before our test runs
require('babel-register')();

//disable webpack feature that mocha thosen't understand
require.extensions['.css'] = function() {};
