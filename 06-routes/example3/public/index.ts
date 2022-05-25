async function handleRegister(ev){
    ev.preventDefault();
    let {username, password} = ev.target.elements;
    console.log(username, password)
    username = username.value;
    password = password.value;

    console.log(username, password)

    const {data} = await axios.post('/users/add-user',{username, password})
    console.log(data)
}

async function handleUpdate(ev, userId){
    console.log(ev, userId)
    const role  = ev.target.value;
    const {data} = await axios.patch('/users/update-user', {userId, role});
    console.log(data)
   
}

async function handleGetUsers(){
  
    const {data} = await axios.get('/users/get-users')
    console.log(data)
    const {users} = data;
    console.log(users)
    if(users){
        renderUsers(users);
    }
}

async function handleDelete( userId){
  
    const {data} = await axios.delete('/users/delete-user', {data:{userId}})
    console.log(data)
   
}

function renderUsers(users){
    const html =  users.map(user=>{
        console.log(user)
        return `<div>${user.username} 
        <input type='text' placeholder='role' value="${user.role}" onblur='handleUpdate(event, "${user._id}")'/>
        <button onclick='handleDelete("${user._id}")'>DELETE</button>
        </div>`
    }).join('');
    console.log(html)

    document.getElementById('users').innerHTML = html;
}