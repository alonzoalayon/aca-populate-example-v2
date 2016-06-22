window.$ = window.jQuery = require('jquery');
var el = document.createElement('div');
el.innerText = 'Hello, Jason!';

$('#app').html(el);
