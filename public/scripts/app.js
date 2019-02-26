'use strict';

// 
var visibility = false;

var app = {
    title: 'Visibility Toggle',
    message: ''
};

var toggleVisibility = function toggleVisibility() {
    visibility = !visibility;
    render();
};

var appRoot = document.getElementById('app');

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibility },
            visibility ? 'Hide details' : 'Show details'
        ),
        visibility && React.createElement(
            'p',
            null,
            'Hey. these are the details that are revealed.'
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
