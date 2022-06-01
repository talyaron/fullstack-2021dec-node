
async function handleDeleteUser(userId: string) {
  try {
    
    // @ts-ignore
    const { data } = await axios.delete("/users/user-delete", {data:{ userId }});
  
    if(!Array.isArray(data)) throw new Error("data should be an array ant it is not")
    renderUser(data);


  } catch (error) {
    console.error(error);
  }
}
function handleGetUsers() {
	// add axios to html!!!!
	// const {data} = await axios.get('/users/get-users')
	// const {users} = data;
	renderUsers(usersArr);
}
async function handleAddUser(e) {
  try {
    e.preventDefault();
    const name = e.target.elements.name.value;
    // @ts-ignore
    const { data } = await axios.post("/users/user-add", { name });
    renderUser(data);
    if(!Array.isArray(data)) throw new Error("data should be an array ant it is not")
    e.target.reset();
  } catch (error) {
    console.error(error);
  }
}
function handleUpdateUser(userId) {
    const newName = prompt();
    console.dir(newName)
    const index = usersArr.findIndex(object => {return object.userId === String(userId)})
    usersArr[index].name = newName
    renderUsers(usersArr)
}
function renderUsers(usersArr) {
	let html = '';
	usersArr.forEach((user) => {
		html += `<div class="users_class" id="${user.userId}"> name:${user.name} <button onclick="handleUpdateUser(${user.userId})">Update </button></div>`;
	});
	usersContainer.innerHTML = html;
}