
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
async function handleGetUsers() {
	// add axios to html!!!!
	const {data} = await axios.get('/users/get-users')
	const {users} = data;
    if(!Array.isArray(users)) throw new Error("users should be an array ant it is not")
	renderUsers(users);
}
async function handleAddUser(e) {
  try {
    e.preventDefault();
    const name = e.target.elements.name.value;
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
    
    const {data} = await axios.patch('/users/update-user', {userId, newName})
	const {users} = data;
    if(!Array.isArray(users)) throw new Error("users should be an array ant it is not")

   
    renderUsers(users)
}
function renderUsers(usersArr) {
	let html = '';
	usersArr.forEach((user) => {
		html += `<div class="users_class" id="${user.userId}"><a href="items.html?userId=${user.userId}">name:${user.name}</a> 
        <button onclick="handleUpdateUser('${user.userId}')">Update </button>
        <button onclick="handleDeleteUser('${user.userId}')">DELETE </button>
        </div>`;
	});
    const root = document.querySelector('#root')
	root.innerHTML = html;
}