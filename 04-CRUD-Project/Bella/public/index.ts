interface user {
    userName : string,
    email : string,
    uniqID : string,
    permissions : any
}

async function handleAddUser(ev : any) {
    try {
        ev.preventDefault();

        const elements = ev.target.elements;
        const userName = elements.userName.value;
        const email = elements.email.value;
        const permissions = elements.permissions.value;
        
        console.dir(permissions.value);
        
        

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


async function handleEditUser(ev : any, uniqID : string) {
    try {
        ev.preventDefault();
        
        const userNameCell : HTMLElement = document.querySelector("#userName"); 
        userNameCell.setAttribute("contenteditable", "true");
        userNameCell.id = uniqID;
        userNameCell.focus();

        const emailCell : any = document.querySelector("#email");
        emailCell.setAttribute("contenteditable", "true");
        emailCell.id = uniqID;
        
        const permissionsCell : any = document.querySelector("#permissions");
        permissionsCell.setAttribute("contenteditable", "true");
        permissionsCell.id = uniqID;
        
        

        // const updateButton: any = document.querySelector("#updateButton");
        // updateButton.style.display = "block";

        // const email = event.target.value; const permissions = event.target.value;
        // @ts-ignore
        const {data} = await axios.put('/api/update-user', {uniqID, userName, email, permissions});

        const {users, error} = data;
        if (error) 
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
      <td id="permissions">${user.permissions.value}</td>
      <td onclick="handleDeleteUser('${user.uniqID}')">Delete</td>
      <td onclick="handleEditUser(event, '${user.uniqID}')">Edit</td>
    </tr>`;
    });
    usersTable.innerHTML = html;
}

// <select name="permissions" placeholder="permissions" required ">
// <option id="value "value="Viewer ">Viewer</option>
// <option value="Editor ">Editor</option>
// <option value="Admin ">Admin</option>
// </select>