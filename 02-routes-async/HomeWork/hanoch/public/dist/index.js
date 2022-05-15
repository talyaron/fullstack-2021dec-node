function getRandomJoke() {
    var data = axios.get('/api/randomJoke').then(function (response) {
        var jokeRender = response.jokeRender;
        console.log(jokeRender);
        // if (error) throw new Error(error);
        renderJoke(jokeRender);
    }).data;
}
;
function renderJoke(jokeRender) {
    var root = document.querySelector('#root');
    if (jokeRender.type === "joke") {
        root.innerHTML = "<p>" + jokeRender.content + "</p>";
    }
    else if (jokeRender.type === "meme") {
        root.innerHTML = "<img src\"" + jokeRender.content + "\">";
    }
    else if (jokeRender.type === "gif") {
        root.innerHTML = "<img src\"" + jokeRender.content + "\">";
    }
}
;
