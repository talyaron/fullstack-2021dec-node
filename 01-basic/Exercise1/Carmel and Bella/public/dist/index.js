var heading = document.querySelector('.heading');
heading.innerText = 'I am a text!';
var cards = document.querySelector('.card');
function loopcards() {
    for (var i = 0; i < 5; i++) {
        return cards.innerText = "" + i++;
    }
}
