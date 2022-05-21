interface user {
  userName: string,
    email: string,
    uniqID: string,
    permissions: string,
}



async function handleAddUser(ev: any) {
  try {
    ev.preventDefault();

    const elements = ev.target.elements;
    const userName = elements.userName.value;
    const email = elements.email.value;
    const permissions = elements.permissions.value;

    if (!userName || !email || !permissions) throw new Error("Details are required");

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
    if (error) throw new Error(error);

    renderData(users);


  } catch (error) {
    console.error(error);
  }
}


function renderData(users: Array < user > ) {
  const usersTable:HTMLTableElement = document.querySelector("#tableBody");

  let html = "";
  users.forEach((user) => {
    html += `
    <tr>
      <td>${user.userName}</td>
      <td>${user.email}</td>
      <td>${user.uniqID}</td>
      <td>${user.permissions}</td>
      <td onclick="handleDeleteUser('${user.uniqID}')">Delete</td>
      <td onclick="handleEditUser('${user.uniqID}')">Edit</td>
    </tr>`;
  });
  usersTable.innerHTML = html;
}

// let html = "";
// users.forEach((user) => {
//   html += `
//   <tr>
//     <td>${user.userName}</td>
//     <td>${user.email}</td>
//     <td>${user.uniqID}</td>
//     <td>${user.permissions}</td>
//   </tr> 
//   <button onclick="handleDeleteUser('${user.uniqID}')">DELETE</button>
//   <input type="number" placeholder="Age" onClick="handleUpdateAge(event, '${user.uniqID}')"/>`;
// });

