var root = document.querySelector('#root');
root.onmouseenter = handleChage;
function handleChage(ev) {
    ev.target.style.color = 'red';
}
