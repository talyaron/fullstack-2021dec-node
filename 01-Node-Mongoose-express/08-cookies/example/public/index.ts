function handleLoad(): void {
    console.log('handleLoad')
    getUserByCookie();
}

async function handleRegister(ev) {
    ev.preventDefault();
    let { username, password } = ev.target.elements;

    username = username.value;
    password = password.value;

  
    
    //@ts-ignore
    const { data } = await axios.post("/users/add-user", { username, password });
    console.log(data);
}

async function handleUpdate(ev, userId) {
    console.log(ev, userId)
    const role = ev.target.value;
    
    //@ts-ignore
    const { data } = await axios.patch('/users/update-user', { userId, role });
    console.log(data)

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

async function handleDelete(userId) {

     //@ts-ignore
    const { data } = await axios.delete('/users/delete-user', { data: { userId } })
    console.log(data)

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

function renderUsers(users) {
    const html = users.map(user => {
        console.log(user)
        return `<div>${user.username} 
        <input type='text' placeholder='role' value="${user.role}" onblur='handleUpdate(event, "${user._id}")'/>
        <button onclick='handleDelete("${user._id}")'>DELETE</button>
        </div>`
    }).join('');
    console.log(html)

    document.getElementById('users').innerHTML = html;
}