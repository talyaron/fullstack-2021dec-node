interface user {
    userName: string,
        email: string,
        uniqID: string,
        permissions: any
};


async function handleAddUser(ev: any) {
    try {
        ev.preventDefault();

        const elements = ev.target.elements;
        const userName = elements.userName.value;
        const email = elements.email.value;
        const permissions = elements.permissions.value;

        // @ts-ignore
        const {
            data
        } = await axios.post('/api/add-user', {
            userName,
            email,
            permissions
        });

        const {
            users,
            error
        } = data;
        if (error)
            throw new Error(error);
        renderData(users);

    } catch (error) {
        console.error(error);
    }
};

async function handleEditUser(uniqID: string) {
    try {

        const newName = prompt();
        users.forEach((user) => {
            const index = users.findIndex(object => {
                return object.uniqID === String(uniqID)
            });
            users[index].userName = newName;
            console.log(user);
            
        });
        
        renderData(users);

    } catch (error) {
        console.error(error);
    }
}

function renderData(users: Array < user > ) {
    const usersTable = document.querySelector("#body");

    let html: any = "";
    users.forEach((user) => {
        html +=
            `<tr id ='tr + ${user.uniqID}'>
      <td id="userName + ${user.uniqID}">${user.userName}</td>
      <td id="email + ${user.uniqID}">${user.email}</td>
      <td id="id + ${user.uniqID}">${user.uniqID}</td>
      <td id="permissions + ${user.uniqID}">${user.permissions}</td>
      <td id="deleteBtn"" onclick="handleDeleteUser('${user.uniqID}')">Delete</td>
      <td id="editBtn" onclick="handleEditUser('${user.uniqID}')">Edit</td>
    </tr>`;
    });

    usersTable.innerHTML = html;
};
