const logoImg1:any=document.querySelectorAll("teamLogo__1")
const logoImg2:any=document.querySelectorAll("teamLogo__2")

async function handleGetTeam1() {
    try {
        console.log("get success")
      //  @ts-ignore: cannot find module 'axios'
      const { data } = await axios.get("/api/user1");
      console.log(data)
      const { play, error } = data;
      if (error) throw new Error(error);
      console.log(play)
      renderLoader()
      renderUser(play);
      console.log("get Team 1 & then get Team 2");
    } catch (error) {
      console.error(error);
    }
  }
  
  
  async function handleGetTeam2() {
    try {
    //@ts-ignore: cannot find module 'axios'
      const { data } = await axios.get("/api/user2");
      console.log(data)
      const { play, error } = data;
      if (error) throw new Error(error);
      console.log(play)
      renderLoader()
      renderUser(play);
      console.log("get Team 2 after you get Team 1");
    } catch (error) {
      console.error(error);
    }
  }
  

function renderUser(play: Team) {
    const root: HTMLElement = document.querySelector("#root");
  
    root.innerText = `user ${play.name} is ${play.id} years old`;
  }

  function renderLoader(){
    const loader: HTMLElement = document.querySelector('#loader')
    if(!loader.classList.contains('lds-dual-ring')){
        loader.classList.add('lds-dual-ring');
        console.log('add')
    } else {
        loader.classList.remove('lds-dual-ring');
        console.log('remove')
    }
}

function addPicture{

}