interface userStory{
    name: string;
    text:string;
}



async function handleGetStory(ev) {
    ev.preventDefault();

    try {

        const userName = document.getElementById('#fname');
        const userText = document.getElementById('#userStory');
      // @ts-ignore
      const { data } = await axios.post("/api/story",  {userName, userText});
      console.log(data);
      const { myStory, error } = data;
      if (error) throw new Error(error);
      renderStory(myStory);

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


  function renderStory(addNewStory :Array <userStory>){
      let newStory = document.querySelector('.newStory');
    //   let userName =  document.querySelector('.userName');
    //   userName.innerHTML = myStory.name;
    //   newStory.innerHTML = myStory.text;
    let html = "";
    addNewStory.forEach((elm)=> {
        html+= `<p>${elm.natme}:</p> ${elm.text} <br> <br>`
    })
    newStory.innerHTML = html;

  }

  


