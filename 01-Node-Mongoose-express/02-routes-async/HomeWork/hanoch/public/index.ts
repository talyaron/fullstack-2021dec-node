
// async function getRandomJoke(){
//     try {
//     const {data} = await axios.get("/api/randomJoke")
//         const {jokeRender, error} = data;
//         console.log(jokeRender);
//         if (error) throw new Error(error);
//         renderJoke(jokeRender);
        
//     } catch (error) {
//         console.error(error);
//       }
// };
async function getRandomJoke(){
    try {
        const response = await axios.get("/api/randomJoke");
        console.log(response);
        console.log(response.data.jokes);
        renderJoke(response.data.jokes);
        
    } catch (error) {
        console.error(error);
      }
};
function renderJoke(jokeRender: jokes){
    const root:HTMLElement = document.querySelector('#root');
   
   
        if(jokeRender.typed === "joke"){
            root.innerHTML = `<p>${jokeRender.content}</p>`
        }
        else if(jokeRender.typed === "meme"){
            const meme = root.innerHTML = `<img src="${jokeRender.content}">`;
            console.log(meme)
        }
        else if(jokeRender.typed === "gif"){
            root.innerHTML = `<img src="${jokeRender.content}">`;
        }
   
    
    

};