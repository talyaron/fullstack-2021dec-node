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

async function handleEditUser(ev:any,  uniqID : string) {
    try {

        // const userName = event.target.value;
        // const email = event.target.value;
        // const permissions = event.target.value;

        // // @ts-ignore
        // const {data} = await axios.put('/api/update-user', { uniqID, user});

        // const {users, error} = data;
        // if (error) 
        //     throw new Error(error);
                        
        // renderData(users);

        //create editable cell
        console.log(`#email-${uniqID}`)
        const emailCell:HTMLElement = document.querySelector(`#email-${uniqID}`);
        console.dir(emailCell)
        emailCell.setAttribute("contenteditable", "true");
        emailCell.style.backgroundColor="yellow"

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
      <td>${user.userName}</td>
      <td id="email-${user.uniqID}">${user.email}</td>
      <td>${user.uniqID}</td>
      <td>${user.permissions}</td>
      <td onclick="handleDeleteUser('${user.uniqID}')">Delete</td>
      <td onclick="handleEditUser(event, '${user.uniqID}')">Edit</td>
    </tr>`;
    });
    usersTable.innerHTML = html;
}
