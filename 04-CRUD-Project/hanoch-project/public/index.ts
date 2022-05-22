interface Story {
    name:string,
    story:string,
}

async function handleGetStory(ev) {
    ev.preventDefault();
    console.dir(ev)
    const name = ev.target.elements.name.value;
    const story = ev.target.elements.story.value;
    console.log(name)
    console.log(story)
    // @ts-ignore
    const {data} = await axios.post('/api/onGo_story', {name, story})
    console.dir(data)
    const {conStory, error} = data;
    
    if (error) throw new Error(error);
    renderStory(conStory)
}

async function getStory() {
    try {
        // @ts-ignore
        const {data} = await axios.get("/api/getStory");

        const {conStory, error} = data;
        if(error) throw new Error(error.message)

        if(conStory){
            renderStory(conStory)
        }

    } catch (error) {
        console.error(error)
    }
}

getStory()

function renderStory(addStory: Array <Story>){
    const story = document.querySelector("#story")
    let html = "";
    console.log(addStory)
    addStory.forEach((elm) =>{
        html += `<span>${elm.name}:</span> ${elm.story} <br> <br>`
    })
    story.innerHTML = html;

}
