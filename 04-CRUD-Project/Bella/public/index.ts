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
        const td: any = document.querySelectorAll("td");

            if (td.classList.contains(".cell")) {
                td.setAttribute("contenteditable", "true");
            };
        
        const {
            data
        } = await axios.patch('/api/update-user', {
            uniqID
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
}

function renderData(users: Array < user > ) {
    const usersTable = document.querySelector("#body");

    let html: any = "";
    users.forEach((user) => {
        html +=
            `<tr id ='tr-${user.uniqID}'>
      <td class="cell">${user.userName}</td>
      <td class="cell">${user.email}</td>
      <td>${user.uniqID}</td>
      <td class="cell">${user.permissions}</td>
      <td onclick="handleDeleteUser('${user.uniqID}')">Delete</td>
      <td onclick="handleEditUser(event, '${user.uniqID}')">Edit</td>
    </tr>`;
    });

    usersTable.innerHTML = html;
}

function renderUsers(users: Array < user > ) {
    const table = document.querySelector("#usersTable");
}


// <select name="permissions" placeholder="permissions" required "> <option
// id="value "value="Viewer ">Viewer</option> <option value="Editor
// ">Editor</option> <option value="Admin ">Admin</option> </select>++