interface user {
    userName : string,
    email : string,
    uniqID : string,
    permissions : string
}

async function handleAddUser(ev : any) {
    try {
        ev.preventDefault();

        const elements = ev.target.elements;
        const userName = elements.userName.value;
        const email = elements.email.value;
        const permissions = elements.permissions.value;

        if (!userName || !email || !permissions) 
            throw new Error("Details are required");
        
        // @ts-ignore
        const {data} = await axios.post('/api/add-user', {userName, email, permissions});

        const {users, error} = data;
        if (error) 
            throw new Error(error);
        
        renderData(users);

    } catch (error) {
        console.error(error);
    }
}

async function handleEditUser(event : any, uniqID : string) {
    try {

        const userName: HTMLElement = document.querySelector("#userName");
        userName.setAttribute("id", "`${uniqID}`");
        userName.setAttribute("contenteditable", "true");
        console.log(userName);
        // const email = event.target.value;
        // const permissions = event.target.value;

        // // @ts-ignore
        // const {data} = await axios.put('/api/update-user', { uniqID, user});

        // const {users, error} = data;
        // if (error) 
            throw new Error(error);
                        
        renderData(users);

    } catch (error) {
        console.error(error);
    }
}

function renderData(users : Array < user >) {
    const usersTable : HTMLTableElement = document.querySelector("#tableBody");

    let html = "";
    users.forEach((user) => {
        html += `
    <tr>
      <td id="userName">${user.userName}</td>
      <td id="email">${user.email}</td>
      <td id="uniqID">${user.uniqID}</td>
      <td id="permissions">${user.permissions}</td>
      <td onclick="handleDeleteUser('${user.uniqID}')">Delete</td>
      <td onclick="handleEditUser('${user.uniqID}')">Edit</td>
    </tr>`;
    });
    usersTable.innerHTML = html;
}
