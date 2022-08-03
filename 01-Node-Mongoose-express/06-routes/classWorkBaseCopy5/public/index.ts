
async function handleGetUsers(){
  
    const {data} = await axios.get('/users/get-users')
    console.log(data)
    const {users} = data;
    console.log(users)
    console.log(`ts`)
    if(users){
        renderUsers(users);
    }
}

function renderUsers(users){
    const html =  users.map(user=>{
        console.log(user)
        return `<div>${user.username}</div>`
    }).join('');
    console.log(html)

    document.getElementById('users').innerHTML = html;
}