

  function handleLoadData() {
    loadData();
  }
  
  function handleAddUser() {
   addUser();
  }
  
  async function loadData() {
    try {
      // @ts-ignore
      const { data } = await axios.get("/api/AllUsers");
  
      const { users, error } = data;
      if (error) throw new Error(error);
  
      renderData(users);
    } catch (err: any) {
      console.error(err);
    }
  }
  
  async function addUser() {
    try {
      // @ts-ignore
      const { data } = await axios.get("/api/addUser");
  
      const { users, error } = data;
      if (error) throw new Error(error);
  
      renderData(users);
    } catch (err: any) {
      console.error(err);
    }
  }
  
  function renderData(user) {
    const table: HTMLElement = document.querySelector("table");
  
    table.innerHTML = `<img src= ${user.src} alt="user"/>`;
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

async function handleAddUser(ev:any){
  try {
    ev.preventDefault();

    const name = ev.target.elements.name.value;
    const age = ev.target.elements.age.valueAsNumber;

    if(!name || !age) throw new Error("Name and age are required");

    // @ts-ignore
    const { data } = await axios.post('/api/add-user', { name, age });

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


  
  