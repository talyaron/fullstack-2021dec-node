
function getRandomJoke(){
    const {data} = axios.get('/api/randomJoke').then(response => {
        const {jokeRender} = response;
        console.log(jokeRender);
        // if (error) throw new Error(error);
        renderJoke(jokeRender)
        
    })
};

function renderJoke(jokeRender: jokes){
    const root:HTMLElement = document.querySelector('#root');
    if(jokeRender.type === "joke"){
        root.innerHTML = `<p>${jokeRender.content}</p>`
    }
    else if(jokeRender.type === "meme"){
        root.innerHTML = `<img src"${jokeRender.content}">`
    }
    else if(jokeRender.type === "gif"){
        root.innerHTML = `<img src"${jokeRender.content}">`
    }

};