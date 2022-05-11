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
    console.log(data);

    const { users, error } = data;
    if (error) throw new Error(error);

    renderUsers(users);
  } catch (err: any) {
    console.error(err);
  }
}

function renderUser(user: User) {
  const root: HTMLElement = document.querySelector("#root");

  root.innerHTML = `user ${user.name} is ${user.age} years old`;
}

function renderUsers(users: Array<User>) {
  const root: HTMLElement = document.querySelector("#root");

  let html = "";
  users.forEach((user) => {
    html += `<p>user ${user.name} is ${user.age} years old <button onclick='handleDelete("${user.id}")'>DELETE</button></p>`;
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

async function handleDelete(userId: string) {
  try {
    console.log(userId);

    //@ts-ignore
    renderLoader()
    const { data } = await axios.delete("/api/delete-user", { data: { userId } });
    renderLoader()
    const { users, error } = data;
    if (error) throw new Error(error);
    console.log(users);
    renderUsers(users);
     
  } catch (error) {
    console.error(error);
  }
}
