import { Url } from "url"

interface UserInterface{
    name:string,
    age:number, 
    image:Url
}

let user:Array<UserInterface>=[]

async function profileEdit (user:any) {
    try {
        let html = '';
        user.forEach((user:{name:string; age:number; image:Url}) => {
            html += `
            <div class="profile">
            <h1>My name is ${user.name}</h1>
            <h1>My age is ${user.age}</h1>
            <img src="${user.image}" alt="kadima bella" width="500" height="600">
            </div>
            `;
        });
        const root = document.querySelector('#root')
        root.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

async function pushUser(ev: any) {
    ev.preventDefault();
    try {
      const name = ev.target.name.value;
      const age = ev.target.age.value;
      const url = ev.target.image.value;
      
  
      console.log(name, age, url);
      //@ts-ignore
      const { data } = await axios.post("/users/pushUser", { name, age, url });
      const { user , error } = data;
        console.log(user)
        profileEdit(user)
      if(error) throw error;
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
