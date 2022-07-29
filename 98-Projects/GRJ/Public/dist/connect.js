var socket = io();
var form = document.querySelector('#form');
var input = document.querySelector('#input');
var messages = document.querySelector('#messages');
form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    if (input.value) {
        socket.emit('chat message', input.value);
    }
    input.value = '';
});
socket.on('chat message', function (msg) {
    var item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});
