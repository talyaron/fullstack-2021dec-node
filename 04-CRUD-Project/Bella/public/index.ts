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

async function handleEditUser(uniqID : string) {
    try {
        // const tableData:any = document.querySelectorAll('td')
        // for (let i = 0; i < tableData.length; i++) {
        //     tableData.setAttribute("contenteditable", "true");
        // }
        
        const userName : any = document.querySelector("#userName");
        userName.setAttribute("contenteditable", "true");
        userName.id = "userName " + uniqID;
        userName.innerHTML = event.target.value;

        const email : any = document.querySelector("#email");
        email.setAttribute("contenteditable", "true");
        email.id = "email " + uniqID;

        const permissions : any = document.querySelector("#permissions");
        permissions.setAttribute("contenteditable", "true");
        permissions.id = "permissions " + uniqID;

        // const updateButton: any = document.querySelector("#updateButton");
        // updateButton.style.display = "block";

        userName.focus();
        console.dir(userName);
        console.log(uniqID);
        // const email = event.target.value; const permissions = event.target.value;
        // @ts-ignore
        const {data} = await axios.put('/api/update-user', {uniqID, userName});

        const {users, error} = data;
        if (error) 
            throw new Error(error);
        
        renderData(users);

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
      <td id="userName">${user.userName}</td>
      <td id="email">${user.email}</td>
      <td id="uniqID">${user.uniqID}</td>
      <td id="permissions">${user.permissions}</td>
      <td onclick="handleDeleteUser('${user.uniqID}')">Delete</td>
      <td onclick="handleEditUser(event, '${user.uniqID}')">Edit</td>
    </tr>`;
    });
    usersTable.innerHTML = html;
}
function querySelectorAll(arg0 : string) {
    throw new Error("Function not implemented.");
}
