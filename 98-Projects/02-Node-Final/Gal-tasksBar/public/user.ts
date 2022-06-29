export interface user{
    userName: string,
    email: string,
    password: string
};

let user:Array<user>=[]


async function getUsers() {
    try {
    // @ts-ignore
      const {data} = await axios.get('/user/get-users')
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
	let html = '';
	user.forEach((user: { password: any; userName: any; email: any; }) => {
		html += `<div class="screen__card-wrapper" id="${user.email}">
    <h3 class="main__title-h3__white">${user.userName}</h3>
    <div class="main__wrapper__actions">
        <img onclick="handleUpdateUser('${user.email}')" class="main__wrapper__actions__icon" src=" ./icons/pencil.svg" alt="edit">
        <img onclick="handleDeleteUser('${user.email}')" class="main__wrapper__actions__icon" src="./icons/trash.svg" alt="delete">
    </div>
    </div>`;
	});
    const root = document.querySelector('#usersTasks')
	root.innerHTML = html;
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
      const userId = getUsers();
      const userName = document.querySelector("#userName");
      userName.innerHTML = `<h1>Welcome  ${name}</h1>`;
    } catch (error) {
      console.log(error);
    }
  }
  

