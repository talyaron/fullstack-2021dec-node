interface User {
  name: string;
  age: number;
  id: string;
}

function handleGetUser1() {
  try {
    console.log("get user 12");
    renderLoader();
    // @ts-ignore
    axios
      .get("/api/user1")
      .then(({ data }) => {
        console.log(data);
        const { user, error } = data;
        if (error) throw new Error(error);
        console.log(user);
        renderLoader();
        renderUser(user);
      })
      .catch((err) => console.error(err));
  } catch (error) {
    console.error(error);
  }
}

async function handleGetUser2() {
  try {
    console.log("get user (1)");
    console.log("get user After fetch (2)");
    renderLoader();

    // @ts-ignore
    const { data } = await axios.get("/api/user2");
    renderLoader();
    console.log(data);
    console.log("get user After fetch (2.5)");
    const { user, error } = data;
    if (error) throw new Error(error);

    renderUser(user);

    console.log("get user After the end of fetch (3)");
  } catch (error) {
    console.error(error);
  }
}

function handleGetUser3() {
  try {
    renderLoader();

    // @ts-ignore
    axios.get("/api/user3").then(({ data }) => {
      console.log(data);
      const { user, error } = data;
      if (error) throw new Error(error);
      renderUser(user);
      renderLoader();
    });
  } catch (error) {
    console.error(error);
  }
}

function handleGetAllUsers() {
  getAllUsers();
}

async function getAllUsers() {
  try {
    // @ts-ignore
    const { data } = await axios.get("/api/get-users");

    const { users, error } = data;
    if (error) throw new Error(error);

    renderUsers(users);
  } catch (err: any) {
    console.error(err);
  }
}

async function handleDeleteUser(userId: string) {
  try {
    // send to server the Id of the user that we wnat to delete
    // @ts-ignore
    const { data } = await axios.delete('/api/delete-user', { data: { userId } });

    const { users, error } = data;
    if (error) throw new Error(error);

    renderUsers(users);
  } catch (error) {
    console.error(error);
  }
}


async function handleUpdateAge(event: any, userId: string) {
  try {
   
    const age:number = event.target.valueAsNumber;
  
    // @ts-ignore
    const { data } = await axios.put('/api/update-user', { userId, age });

    const { users, error } = data;
    if (error) throw new Error(error);

    renderUsers(users);

  } catch (error) {
    console.error(error);
  }
}


// renders


function renderUser(user: User) {
  const root: HTMLElement = document.querySelector("#root");

  root.innerHTML = `user ${user.name} is ${user.age} years old`;
}

function renderUsers(users: Array<User>) {
  const root: HTMLElement = document.querySelector("#root");

  let html = "";
  users.forEach((user) => {
    html += `<p>user ${user.name} is ${user.age} years old <button onclick="handleDeleteUser('${user.id}')">DELETE</button>
    <input type="number" placeholder="Age" onblur="handleUpdateAge(event, '${user.id}')" /></p>`;
  });
  root.innerHTML = html;
}

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

