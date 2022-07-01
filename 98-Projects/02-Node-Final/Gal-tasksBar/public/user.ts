import { func } from "joi";

export interface User{
    userName: string,
    email: string,
    password: string
};

let user:Array<User>=[]


async function getUsers(event) {
    try {
      const email = event.target.email.value;
      const password = event.target.password.value;
      console.dir(email,password)
        // @ts-ignore
      const {data} = await axios.post('/user/get-users',{email,password})
      const {users,error} = data;
      if(error) throw new Error("Error")
      renderUsers(users);

    } catch (error) {
      console.error(error);
      return false;
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
        } = await axios.post('/user/add-user', {
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


function renderUsers(user) {
	try{
    let html = '';
	user.forEach((user: { password: any; userName: any; email: any; }) => {
		html += `<div class="screen__card-wrapper" id="${user.email}">
    <h3 class="main">${user.userName}</h3>
    <div class="main">
        <img onclick="handleUpdateUser('${user.email}')" class="main" src=" ./icons/pencil.svg" alt="edit">
        <img onclick="handleDeleteUser('${user.email}')" class="main" src="./icons/trash.svg" alt="delete">
    </div>
    </div>`;
	});
    const root = document.querySelector('#usersTasks')
	root.innerHTML = html;
} catch (error) {
  console.error(error);
}
}

   //   const queryString = window.location.search;

async function handleDelete(event) {
	try {
		console.log(`delete button pressed`);
		const userId = event.target.id;
        // @ts-ignore
		const { data } = await axios.delete("/user/delelte-user", { data: { userId, userId } });
		const { users, error } = data;
		renderUsers(users)
	} catch (error) {
		console.error(error);
	}
}

async function handleUpdateUser(_newUsers:any) {
  try{  const newName = prompt('Enter new user name');
    console.log(newName);
    
      // @ts-ignore
    const {data} = await axios.patch('/user/update-user', { newName})
	  const {updateUser, error} = data;
    console.log(data);

    renderUsers(updateUser)

    if (error) throw error;
} catch (error) {
  console.error(error);
}
};



async function getUserByCookie() {
    try{
    //@ts-ignore
    const { data } = await axios.get("/user/get-userCookie");
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

  
  async function toUserPage() {
    try {
      const userId = getUsers(event);
      const userName = document.querySelector("#userName");
      userName.innerHTML = `<h1>Welcome  ${userName}</h1>`;
    } catch (error) {
      console.log(error);
    }
  }


