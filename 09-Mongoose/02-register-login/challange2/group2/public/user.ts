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

