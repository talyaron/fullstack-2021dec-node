
async function handleDisplayUsers(){
    //@ts-ignore
    const {data} = await axios.get('/api/users/getAllUsers')
    console.log(data)
    const {users} = data;
    console.log(users)
    if(users){
        renderUsers(users);
    }
}

function renderUsers(users:any){
    let html:string = ""
    users.forEach((user) => {
        html += `
            <div>
             <p>${user.userName}</p>
             <p>${user.userId}</p>
            </div> `
    })
    let root:HTMLDivElement=document.querySelector("#root")
    root.innerHTML=html
}