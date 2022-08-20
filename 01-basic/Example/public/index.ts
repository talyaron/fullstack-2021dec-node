const root:HTMLElement = document.querySelector('#root');
root.onmouseenter = handleChage;

function handleChage(ev:any){
    ev.target.style.color = 'red'
}