const heading:HTMLElement = document.querySelector('.heading');
heading.innerText = 'I am a text!';

const cards:HTMLDivElement = document.querySelector('.card');

function loopcards (){
    for (let i = 0; i < 5; i++){
        return cards.innerText = `${i++}`;
    }
}

