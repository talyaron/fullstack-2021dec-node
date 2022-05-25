interface user {
    userName: string,
        email: string,
        uniqID: string,
        permissions: any
};

// async function handleLoadUsers(users: Array < user > ) {
//     try {

//         const userName = elements.userName.value;
//         const email = elements.email.value;
//         const uniqID = elements.uniqID.value;
//         const permissions = elements.permissions.value;

//         if (!userName || !email || !permissions)
//             throw new Error("Details are required");

//         // @ts-ignore
//         const {
//             data
//         } = await axios.get('/api/users', {
//             userName,
//             email,
//             uniqID,
//             permissions
//         });

//         const {
//             users,
//             error
//         } = data;
//         if (error)
//             throw new Error(error);
//         renderData(users);

//     } catch (error) {
//         console.error(error);
//     }
// };

async function handleAddUser(ev: any) {
    try {
        ev.preventDefault();

        const elements = ev.target.elements;
        const userName = elements.userName.value;
        const email = elements.email.value;
        const permissions = elements.permissions.value;

        if (!userName || !email || !permissions)
            throw new Error("Details are required");

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

async function handleEditUser(ev: any, uniqID: string) {
    try {

        const tr: any = document.querySelectorAll("tr");
        let td: any = document.querySelectorAll("td");

        td.forEach(ele => {
            ele.setAttribute("contenteditable", "true");
            // if (tr.id !== td.id) {
            //     ele.setAttribute("contenteditable", "false");
            // }
        });

        const {data} = await axios.put('/api/update-user', {uniqID, userName, email, permissions});

        const {users, error} = data;
        if (error) 
            throw new Error(error);

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
            `<tr id ='tr-${user.uniqID}'>
      <td class="cell">${user.userName}</td>
      <td class="email">${user.email}</td>
      <td class="cell">${user.uniqID}</td>
      <td class="cell">${user.permissions}</td>
      <td class="cell"" onclick="handleDeleteUser('${user.uniqID}')">Delete</td>
      <td class="cell" id="editButton" onclick="handleEditUser(event, '${user.uniqID}')">Edit</td>
    </tr>`;
    });

    usersTable.innerHTML = html;
}

function renderUsers(users: Array < user >){
    const table = document.querySelector("#usersTable");
}


// <select name="permissions" placeholder="permissions" required "> <option
// id="value "value="Viewer ">Viewer</option> <option value="Editor
// ">Editor</option> <option value="Admin ">Admin</option> </select>++