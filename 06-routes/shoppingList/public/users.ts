async function handleGetUsers(){
//   @ts-ignore
    const {data} = await axios.get('/api/users/get-users')
    console.log(data)
    const {users} = data;
    console.log(users)
    if(users){
        renderUsers(users);
    }
}

// async function handleAddUser(){
//     // @ts-ignore
//     const {data} = await axios.add('/users/add-user')
//     console.log(data)
//     const {users} = data;
//     console.log(users)
//     if(users){
//         renderUsers(users);
//     }
// }


function renderUsers(users:Array<any>){
    const html =  users.map(user=>{
        console.log(user)
        return `<div>${user.username} 
        <input type='text' placeholder='role' value="${user.role}" onblur='handleUpdate(event, "${user._id}")'/>
        <button onclick='handleDelete("${user._id}")'>DELETE</button>
        </div>`
    }).join('');
    console.log(html)

   const usersRoot=  document.getElementById('users')
    if(usersRoot){
        usersRoot.innerHTML = html;
    }
}