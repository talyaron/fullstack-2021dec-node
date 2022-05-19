interface user {
  userName: string,
    email: string,
    uniqID: string,
    permissions: string,
}


async function handleLoadData() {
  try {
    // @ts-ignore
    const {
      data
    } = await axios.get("/api/AllUsers");

    const {
      users,
      error
    } = data;
    if (error) throw new Error(error);

    renderData(users);
  } catch (err: any) {
    console.error(err);
  }
}

async function handleAddUser(ev: any) {
  try {
    ev.preventDefault();

    const elements = ev.target.elements;

    const userName = elements.userName.value;
    const email = elements.email.value;
    const uniqID = elements.uniqID.value;
    const permissions = elements.permissions.value;

    if (!userName || !email || !uniqID || !permissions) throw new Error("Details are required");

    // @ts-ignore
    const {
      data
    } = await axios.post('/api/add-user', {
      userName,
      email,
      uniqID,
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
  const dataTable: HTMLElement = document.querySelector("table");

  let html = "";
  users.forEach((user) => {
    html += `
    <tbody>
    <tr>
      <td>${user.userName}</td>
      <td>${user.email}</td>
      <td>${user.uniqID}</td>
      <td>${user.permissions}</td>
    </tr> 
    <button onclick="handleDeleteUser('${user.uniqID}')">DELETE</button>
    <input type="number" placeholder="Age" onblur="handleUpdateAge(event, '${user.uniqID}')"/></tbody>`;
  });
  dataTable.innerHTML = html;
}


async function handleDeleteUser(uniqID: string) {
  try {
    // send to server the Id of the user that we wnat to delete
    // @ts-ignore
    const {
      data
    } = await axios.delete('/api/delete-user', {
      data: {
        uniqID
      }
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


async function handleUpdateUser(event: any, uniqID: string) {
  try {
    event.preventDefault();
    const elements = event.target.elements;

    const userName = elements.userName.value;
    const email = elements.email.value;
    const uniqID = elements.uniqID.value;
    const permissions = elements.permissions.value;

    // @ts-ignore
    const {
      data
    } = await axios.put('/api/update-user', {
      userName,
      email,
      uniqID,
      permissions
    });

    const {
      users,
      error
    } = data;
    if (error) throw new Error(error);

    renderUsers(users);

  } catch (error) {
    console.error(error);
  }
}




// renders




function renderLoader() {
  const loader: HTMLElement = document.querySelector("#loader");
  if (!loader.classList.contains("lds-dual-ring")) {
    loader.classList.add("lds-dual-ring");
    console.log("add");
  } else {
    loader.classList.remove("lds-dual-ring");
    console.log("remove");
  }
}