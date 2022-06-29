
// async function handleGetUsers() {
//   try {
//   // @ts-ignore
// 	const {data} = await axios.get('/users/get-users')
// 	const {getUsers, error} = data;
    
// 	renderUsers(getUsers);
  
//   if (error) throw error;
//   } catch (error) {
//     console.error(error);
//   } 
// };


async function handleDeleteUser(name: string) {
  try {
    console.log(name)
    // @ts-ignore
    const { data } = await axios.delete("/users/user-delete", {data:{ name }});
    console.log(data)
    
    const {deleteUser, error} = data;

    renderUsers(deleteUser);
    
    if (error) throw error;
  } catch (error) {
    console.error(error);
  }
};


async function handleAddUser(ev: any) {
  try {
    ev.preventDefault();
    const name = ev.target.name.value;
    console.log(name);

    // @ts-ignore
    const { data } = await axios.post("/users/user-add", { name });
    // const {addUser, error} = data;
    console.dir(data);
    
    // renderUsers(addUser);    
    if (!name) throw Error;
        ev.target.reset();

  } catch (error) {
    console.error(error);
  }
};


async function handleUpdateUser(newNames: String) {
  try {
    const newName = prompt('Enter new user name');
    console.log(newNames);
    
      // @ts-ignore
    const {data} = await axios.patch('/users/update-user', { newName})
	  const {updateUser, error} = data;
    console.log(data);

    renderUsers(updateUser)
    
    if (error) throw error;
  } catch (error) {
    console.error(error);
  }
};


function renderUsers(users) {
	let html = '';
	users.forEach((user) => {
		html += `<div class="screen__card-wrapper">
    <h3 class="screen__title-h3__white">${user.name}</h3>
    <div class="screen__card-wrapper__actions">
        <img onclick="handleUpdateUser()" class="screen__card-wrapper__actions__icon" src=" ./icons/pencil.svg" alt="edit">
        <img onclick="handleDeleteUser()" class="screen__card-wrapper__actions__icon" src="./icons/trash.svg" alt="delete">
    </div>
    </div>`;
	});
    const root = document.querySelector('#root')
	root.innerHTML = html;
};

