console.log('loading');

async function initUsers() {
  try {
    // @ts-ignore
    const { data } = await axios.get("/users/user-get");
    // const { users, error } = data;
    // if (error) throw new Error(error);
    console.log(data);
    renderUser(data);
  } catch (error) {
    console.error(error);
  }
}

async function handleDeleteUser(userId: string) {
  try {
    
    // @ts-ignore
    const { data } = await axios.delete("/users/user-delete", {data:{ userId }});
  
    if(!Array.isArray(data)) throw new Error("data should be an array ant it is not")
    renderUser(data);


  } catch (error) {
    console.error(error);
  }
}

async function handleAddUser(e) {
  try {
    e.preventDefault();
    const name = e.target.elements.name.value;
    // @ts-ignore
    const { data } = await axios.post("/users/user-add", { name });
    if(!Array.isArray(data)) throw new Error("data should be an array ant it is not")
    renderUser(data);
    e.target.reset();
  } catch (error) {
    console.error(error);
  }
}

function renderUser(users) {
  try {
    const root: HTMLElement = document.querySelector("#root");
    let html = "";
    users.forEach((user) => {
      html += `
          <div>
           <p>${user.name}</p>
           <button class="button" onclick='handleDeleteUser("${user.userId}")'>Delete</button>
           </div>
                  `;
    });
    root.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}
