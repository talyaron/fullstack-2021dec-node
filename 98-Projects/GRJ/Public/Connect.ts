let socket = io();

const form = document.querySelector('#form');
const input = document.querySelector('#input') as HTMLInputElement;
const messages = document.querySelector('#messages')

form.addEventListener('submit', function (ev: any) {
    ev.preventDefault();
    if (input.value) {
        socket.emit('chat message', input.value)
    }
    input.value = '';
})

socket.on('chat message', function (msg) {
    const item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item)
    window.scrollTo(0, document.body.scrollHeight)
})