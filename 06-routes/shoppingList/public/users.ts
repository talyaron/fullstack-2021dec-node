async function handleDeleteUser(userId: string) {
	try {
		console.log(userId);
		// @ts-ignore
		const { data } = await axios.delete('/users/user-delete', { data: { userId } });
		console.log(data);
		const { users } = data;
		if (!Array.isArray(users)) throw new Error('users should be an array ant it is not');
		renderUsers(users);
	} catch (error) {
		console.error(error);
	}
}
async function handleGetUsers() {
	//@ts-ignore
	const { data } = await axios.get('/users/get-users');
	const { users } = data;
	if (!Array.isArray(users)) throw new Error('users should be an array ant it is not');
	renderUsers(users);
}
async function handleAddUser(e) {
	try {
		e.preventDefault();
		const username = e.target.adduser.value;
		console.log(e);
		console.log(username);
		// @ts-ignore
		const { data } = await axios.post('/users/user-add', { username });
		renderUsers(data);
		if (!Array.isArray(data)) throw new Error('data should be an array ant it is not');
		e.target.reset();
	} catch (error) {
		console.error(error);
	}
}
async function handleUpdateUser(userId) {
	const newName = prompt('Enter new user name');
	//@ts-ignore
	const { data } = await axios.patch('/users/update-user', { userId, newName });
	const users = data;
	if (!Array.isArray(users)) throw new Error('users should be an array ant it is not');
	renderUsers(users);
}
// function renderUsers(usersArr) {
// 	let html = '';
// 	usersArr.forEach((user) => {
// 		html += `<div class="users_class" id="${user.userId}"> name:${user.name}
//         <button onclick="handleUpdateUser('${user.userId}')">Update </button>
//         <button onclick="handleDeleteUser('${user.userId}')">DELETE </button>
//         </div>`;
// 	});
//     const root = document.querySelector('#root')
// 	root.innerHTML = html;
// }

function renderUsers(usersArr) {
	try {
		
	
	let html = '';
	usersArr.forEach((user) => {
		html += `<div class="screen__card-wrapper" id="${user.userId}">
    <a href='items.html?userId=${user.userId}'>
    <h4 class="screen__title-h4">${user.name}</h4>
    </a>
    <div class="screen__card-wrapper__actions">
        <img onclick="handleUpdateUser('${user.userId}')" class="screen__card-wrapper__actions__icon" src=" ./icons/pencil.svg " alt="edit ">
        <img onclick="handleDeleteUser('${user.userId}')" class="screen__card-wrapper__actions__icon" src="./icons/trash.svg " alt="delete ">
    </div>
    </div>`;
	});
	const root = document.querySelector('#root');
	root.innerHTML = html;
} catch (error) {
		console.error(error)
}
}
