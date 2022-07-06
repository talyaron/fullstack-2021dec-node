import { getUsers } from "../cont/usersCont";
import User from "../models/models";

interface user{
    userName: string,
    email: string,
    uid: string,
    password: number
};

function handleLoad(event) {
    try {
        handleGetUsers();
        getUserByCookie();
        // handleLogin(event);
        // handleRegister(event);
    } catch (error) {
      console.error(error);
    }
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

function renderUsers(users: Array < user > ) {
    const renderUsers = document.querySelector("#usersTasks");
}