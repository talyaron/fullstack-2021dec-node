interface userStory{
    name: string;
    text:string;
}



async function handleGetStory(ev) {
    ev.preventDefault();
  console.dir(ev)
    try {

      const name = ev.target.elements.name.value;
      const text = ev.target.elements.text.value;
      // @ts-ignore
      const { data } = await axios.post("/api/story",  {name, text});
      // console.log(data);
      const { myStory, error } = data;
      if (error) throw new Error(error);
      // console.log(userName)
      renderStory(myStory);
      console.log(myStory)
      deleteFileds()
      
      
    } catch (error) {
      console.error(error);
    }

  }
  


async function getUserStory() {
    try {
        // @ts-ignore
        const {data} = await axios.get("/api/getNewStory");

        const {story, error} = data;
        if(error) throw new Error(error.message)

        
            renderStory(story)
        

    } catch (error) {
        console.error(error)
    }
}

  function renderStory(myStory){
    const story =  document.getElementById("storyArea")
    let html = "";
    // console.log(myStory)
    myStory.forEach((elm) =>{
        html += `<h3>${elm.name}:</h3> <span>${elm.text}</span> <br> <br>`
    })
    story.innerHTML = html;

}
function deleteFileds(){
const nameField = document.getElementById('nameField')
const storyField = document.getElementById('textStory')
nameField.innerHTML = ''
storyField.innerHTML = ''
}
