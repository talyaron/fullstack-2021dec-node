import { getUsers } from "../cont/usersCont";
import User from "../models/models";

interface user{
    userName: string,
    email: string,
    uid: string,
    password: number
};

// interface tasks{
//     title: string,
//     description: string,
//     date: Date,
// }

function handleLoad(event) {
    try {
        handleGetUsers();
        getUserByCookie();
        handleLogin(event);
        handleRegister(event);
    } catch (error) {
      console.error(error);
    }
  }
  
async function handleAddUser(ev: any) {
    try {
        ev.preventDefault();

        const elements = ev.target.elements;
        const userName = elements.userName.value;
        const email = elements.email.value;
        const password = elements.permissions.value;
        console.log(userName, email, password)
        if (!userName || !email || !password)
            throw new Error("Details are required");

        const {
            data
             // @ts-ignore
        } = await axios.post('/api/add-user', {
            userName,
            email,
            password
        });

        const {
            user,
            error
        } = data;
        if (error)
            throw new Error(error);
        renderUsers(user);

    } catch (error) {
        console.error(error);
    }
};



function renderUsers(users: Array < user > ) {
    const renderUsers = document.querySelector("#usersTasks");
}

// const getUserInRoom = (room)=>{
//     room= room.trim().toLowerCase()
//     return getUsers.filter((User))=>User.room === room)
// }

async function handleLogin(event: any): Promise<void>{
    try{
    event.preventDefault();
    let { email, password } = event.target.elements;
    email = email.value;
    password = password.value;
    
    //@ts-ignore
    const { data } = await axios.post("/users/handleLogin", { username, password });
    console.log(data);
    const {user} = data;
    window.location.href = "../public/main.html";
    if(!user){
        throw new Error('User not found');
    }

    const usernameDB = user.email;
    const root = document.getElementById('#root');
    if(root){
        root.innerHTML = `<h1>Welcome ${usernameDB}</h1>`
    }
    } catch (error) {
        console.error(error)
    }
}

async function handleDelete(event) {
	try {
		console.log(`delete button pressed`);
		const userId = event.target.id;
        // @ts-ignore
		const { data } = await axios.delete("/users/delelte-user", { data: { userId, userId } });
		const { users, error } = data;
		renderUsers(users)
	} catch (error) {
		console.error(error);
	}
}


async function handleRegister(event: any): Promise<void>{
    event.preventDefault();
    let { email, password } = event.target.elements;

    email = email.value;
    password = password.value;

    console.log(email, password)
    //@ts-ignore
    const { data } = await axios.post("/users/add-user", { email, password });
    console.log(data);
}



function userPage(){
    const usersTasks:HTMLElement= document.querySelector("#usersTasks");
    let html= "";
   
    html+=`
    <div>
        <h1>hello</h1>
    </div>
    `; 
       
    usersTasks.innerHTML=html;
    console.log(userPage);
}

async function getUserByCookie() {
    try{
    //@ts-ignore
    const { data } = await axios.get("/users/get-user");
    console.log(data);
    const {user} = data;
    if(!user){
        throw new Error('User not found');
    }

    const usernameDB = user.username;
    const root = document.getElementById('root');
    if(root){
        root.innerHTML = `<h1>Welcome ${usernameDB}</h1>`
    }
    } catch (error) {
        console.error(error)
    }
}

async function handleGetUsers() {
    //@ts-ignore
   const { data } = await axios.get('/users/get-users')
   console.log(data)

   const { users } = data;
   console.log(users)
   if (users) {
       renderUsers(users);
   }
}


async function handleSearchItems(event) {
	try {
		event.preventDefault();

		//@ts-ignore
		const { data } = await axios.post('/items/searchItems', {
		
		});
		const filtereditems  = data;
	} catch (error) {
		console.error(error);
	}
}





// export function getUserId(): string | false {
//     try {
//       const queryString = window.location.search;
//       console.log(queryString);
  
//       const urlParams = new URLSearchParams(queryString);
  
//       const userId = urlParams.get("userId");
//       console.log(userId);
//       return userId;
//     } catch (error) {
//       console.error(error);
//       return false;
//     }
//   }
