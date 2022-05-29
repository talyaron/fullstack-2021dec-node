// import User from '../model/userModel'

const usersContainer = document.querySelector('.users_container');

function handleGetUsers() {
	// add axios to html!!!!
	// const {data} = await axios.get('/users/get-users')
	// const {users} = data;
	renderUsers(usersArr);
}

const usersArr: Array<User> = [
	{
		name: 'Bella',
		userId: '281294'
	},
	{
		name: 'Gili',
		userId: '310195'
	},
	{
		name: 'Roy',
		userId: '170797'
	},
	{
		name: 'Meir',
		userId: '261176'
	}
];

function handleUpdateUser(userId) {
    const newName = prompt();
    console.dir(newName)
    const index = usersArr.findIndex(object => {return object.userId === String(userId)})
    usersArr[index].name = newName
    renderUsers(usersArr)
}

function renderUsers(usersArr) {
	let html = '';
	usersArr.forEach((element) => {
		html += `<div class="users_class" id="${element.userId}"> name:${element.name} <button onclick="handleUpdateUser(${element.userId})">Update </button></div>`;
	});
	usersContainer.innerHTML = html;
}
