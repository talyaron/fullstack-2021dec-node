interface user {
    userName : string,
    email : string,
    uniqID : string,
    permissions : any
};

async function handleAddUser(ev : any) {
    try {
        ev.preventDefault();

        const elements = ev.target.elements;
        const userName = elements.userName.value;
        const email = elements.email.value;
        const Permissions = elements.permissions.value;
        console.log(elements); // en

        // const Permissions: any = document.getElementById('Permissions'); const
        // value:any = Permissions.options[Permissions.selectedIndex].value;
        // console.log(value); // en

        if (!userName || !email || !Permissions) 
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
};

async function handleEditUser(uniqID : string) {
    try {

        const userName : any = document.querySelector("#userName");
        userName.setAttribute("contenteditable", "true");
        userName.id = uniqID;
        userName.focus();

        const email : any = document.querySelector("#email");
        email.setAttribute("contenteditable", "true");
        email.id = uniqID;

        const Permissions : any = document.querySelector("#permissions");
        Permissions.setAttribute("contenteditable", "true");
        Permissions.id = uniqID;

        // const updateButton: any = document.querySelector("#updateButton");
        // updateButton.style.display = "block"; const email = event.target.value; const
        // Permissions = event.target.value; @ts-ignore

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
    const usersTable = document.querySelector("#body");

    let html : any = "";
    users.forEach((user) => {
        html += 
    `<tr>
      <td id="userName">${user.userName}</td>
      <td id="email">${user.email}</td>
      <td id="uniqID">${user.uniqID}</td>
      <td id="Permissions">${user.permissions}</td>
      <td onclick="handleDeleteUser(${user.uniqID})">Delete</td>
      <td onclick="handleEditUser(${user.uniqID})">Edit</td>
    </tr>`;
    });

    usersTable.innerHTML = html;
}

// <select name="Permissions" placeholder="Permissions" required "> <option
// id="value "value="Viewer ">Viewer</option> <option value="Editor
// ">Editor</option> <option value="Admin ">Admin</option> </select>