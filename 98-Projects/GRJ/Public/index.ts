function handleLoad(): void {
  getUserByCookie();
}

async function handleRegister(ev: any) {
  ev.preventDefault();
  try {
    const email = ev.target.email.value;
    const password = ev.target.password.value;
    const name = ev.target.name.value;

    console.log(email, password, name);
    //@ts-ignore
    const { data } = await axios.post("/users/register", {
      email,
      password,
      name,
    });
    const { register, error } = data;
    if (error) throw error;
    console.log(data);

    if (register) {
      window.location.href = `./profile.html?userId=${register._id}`;
    }

    if (error && error.includes("E11000")) alert("email is already in use");
  } catch (error) {
    console.error(error);
  }
}

async function handleLogin(ev: any) {
  ev.preventDefault();
  try {
    const name = ev.target.name.value;
    const email = ev.target.email.value;
    const password = ev.target.password.value;

    console.log(name, email, password);
    //@ts-ignore
    const { data } = await axios.post("/users/login", {
      name,
      email,
      password,
    });
    console.log(data);
    const { login, error } = data;
    console.log(login);
    if (error) throw error;

    if (login) {
      window.location.href = `./profile.html?userId=${login._id}`;
    }

    if (error) throw error;
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

async function handleSaveInfo(ev: any) {
  ev.preventDefault();
  try {
    const name = ev.target.elements.name.value;

    console.log(name);
    //@ts-ignore
    const { data } = await axios.post("/users/SaveInfo", { name });
    const { user, error } = data;
    if (error) throw error;

    if (user) {
      window.location.href = `./user.html?userId=${user._id}`;
    }

    if (error) throw error;
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

function getUserId(): string | false {
  try {
    const queryString = window.location.search;
    console.log(queryString);

    const urlParams = new URLSearchParams(queryString);
    console.log(urlParams);
    const userId = urlParams.get("userId");
    return userId;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function getUserByCookie() {
  try {
    //@ts-ignore
    const { data } = await axios.get("/users/get-user");
    console.log(data);
    const { user } = data;
    if (!user) {
      throw new Error("User not found");
    }

    const usernameDB = user.username;
    const root = document.getElementById("root");
    if (root) {
      root.innerHTML = `<h1>Welcome ${usernameDB}</h1>`;
    }
  } catch (error) {
    console.error(error);
  }
}

async function onscondPageLoad() {
  try {
    //get params of userId
    const userId = getUserId();

    if (!userId) throw new Error("couldnt find user id in url");

    // @ts-ignore
    const { data } = await axios.get(`/users/get-user?userId=${userId}`);

    const { error, user } = data;
    if (error) throw error;
    console.log(user);
    const { name, age, image } = user;

    const root = document.querySelector("#root");
    root.innerHTML = `<h1>Welcome ${name} ${age}</h1>`;

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

function renderUsers(users) {
  const html = users
    .map((user) => {
      console.log(user);
      return `<div>${user.username} 
        <input type='text' placeholder='role' value="${user.role}" onblur='handleUpdate(event, "${user._id}")'/>
        <button onclick='handleDelete("${user._id}")'>DELETE</button>
        </div>`;
    })
    .join("");
  console.log(html);

  document.getElementById("users").innerHTML = html;
}
