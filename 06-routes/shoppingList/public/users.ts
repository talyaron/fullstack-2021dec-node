// function handleLoad(){

// }

async function handleDelete( userId){
//   @ts-ignore
    const {data} = await axios.delete('/users/delete-user', {data:{userId}})
    console.log(data)
   
}

async function handleLoad(){
//   @ts-ignore
    const {data} = await axios.get('/users/get-users')
    console.log(data)
    const {info} = data;
    console.log(info)
    if(info){
        renderUsers(info);
    }
}

async function handleAddUser(){
    // @ts-ignore
    const {data} = await axios.add('/users/add-user')
    console.log(data)
    const {info} = data;
    console.log(info)
    if(info){
        renderUsers(info);
    }
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