
function handleLoad(event) {
    try {
        getUserByCookie();
        // handleLogin(event);
        // handleRegister(event);
        handleAddUser(event);
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
        } = await axios.post('/users/add-user', {
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


function renderUsers(users) {
	let html = '';
	users.forEach((user: { password: any; userName: any; email: any; }) => {
		html += `<div class="screen__card-wrapper" id="${user.email}">
    <h3 class="screen__title-h3__white">${user.userName}</h3>
    <div class="screen__card-wrapper__actions">
        <img onclick="handleUpdateUser('${user.email}')" class="screen__card-wrapper__actions__icon" src=" ./icons/pencil.svg" alt="edit">
        <img onclick="handleDeleteUser('${user.email}')" class="screen__card-wrapper__actions__icon" src="./icons/trash.svg" alt="delete">
    </div>
    </div>`;
	});
    const root = document.querySelector('#usersTasks')
	root.innerHTML = html;
}


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
    const { data } = await axios.post("/users/register", { email, password });
    console.log(data);
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


async function handleUpdateUser(userId) {
    const newName = prompt('Enter new user name');
      // @ts-ignore
    const {data} = await axios.patch('/users/update-user', {email, newName})
	  const {users} = data;
    if(!Array.isArray(users)) throw new Error("users should be an array")

    renderUsers(users)
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

// async function handleGetUsers() {
//     //@ts-ignore
//    const { data } = await axios.get('/users/get-users')
//    console.log(data)

//    const { users } = data;
//    console.log(users)
//    if (users) {
//        renderUsers(users);
//    }
// }