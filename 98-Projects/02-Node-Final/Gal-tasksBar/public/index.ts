
interface user{
    userName: string,
    email: string,
    uid: string,
    password: number
};

interface tasks{
    title: string,
    uid: string,
    description: string,
    date: Date,
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

        // const {
        //     data
        //      // @ts-ignore
        // } = await axios.post('/api/add-user', {
        //     userName,
        //     email,
        //     password
        // });

        // const {
        //     users,
        //     error
        // } = data;
        // if (error)
        //     throw new Error(error);
        // renderUsers(users);

    } catch (error) {
        console.error(error);
    }
};


function renderUsers(users: Array < user > ) {
    const renderUsers = document.querySelector("#usersTasks");
}



function handleLoad() {
  try {
        getUserByCookie();
  } catch (error) {
    console.error(error);
  }
}

async function handleRegister(ev) {
    ev.preventDefault();
    let { email, password } = ev.target.elements;

    email = email.value;
    password = password.value;

    console.log(email, password)

  
    
    //@ts-ignore
    const { data } = await axios.post("/users/add-user", { email, password });
    console.log(data);
}

async function handleLogin(ev) {
    try{
    ev.preventDefault();
    let { username, password } = ev.target.elements;
    username = username.value;
    password = password.value;
    
    //@ts-ignore
    const { data } = await axios.post("/users/login", { username, password });
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


// async function handleSearchItems(event) {
// 	try {
// 		event.preventDefault();

// 		//@ts-ignore
// 		const { data } = await axios.post('/items/searchItems', {
		
// 		});
// 		const filtereditems  = data;
// 	} catch (error) {
// 		console.error(error);
// 	}
// }
