
// async function handleGetUsers() {
//   // @ts-ignore
// 	const {data} = await axios.get('/users/get-users')
// 	const {users} = data;
//   if(!Array.isArray(users)) throw new Error("users should be an array and it is not")
    
// 	renderUsers(users);
// }


async function handleDeleteUser(userId: string) {
  try {
    console.log(userId)
    // @ts-ignore
    const { data } = await axios.delete("/users/user-delete", {data:{ userId }});
    console.log(data)
    const {users} = data;
    if(!Array.isArray(users)) throw new Error("users should be an array ant it is not")
    renderUsers(users);


  } catch (error) {
    console.error(error);
  }
}



async function handleAddUser(e) {
  try {
    e.preventDefault();
    const name = e.target.elements.name.value;
    console.log(name);
    // @ts-ignore
    const { data } = await axios.post("/users/user-add", { name });
    renderUsers(data);
    if(!Array.isArray(data)) throw new Error("data should be an array ant it is not")
    e.target.reset();
  } catch (error) {
    console.error(error);
  }
}

async function handleUpdateUser(userId) {
    const newName = prompt('Enter new user name');
      // @ts-ignore
    const {data} = await axios.patch('/users/update-user', {userId, newName})
	  const {users} = data;
    if(!Array.isArray(users)) throw new Error("users should be an array ant it is not")

    renderUsers(users)
    // handleGetUsers()
}



function renderUsers(users) {
	let html = '';
	users.forEach((user) => {
		html += `<div class="screen__card-wrapper" id="${user.userId}">
    <h3 class="screen__title-h3__white">${user.name}</h3>
    <div class="screen__card-wrapper__actions">
        <img onclick="handleUpdateUser('${user.userId}')" class="screen__card-wrapper__actions__icon" src=" ./icons/pencil.svg" alt="edit">
        <img onclick="handleDeleteUser('${user.userId}')" class="screen__card-wrapper__actions__icon" src="./icons/trash.svg" alt="delete">
    </div>
    </div>`;
	});
    const root = document.querySelector('#root')
	root.innerHTML = html;
}

