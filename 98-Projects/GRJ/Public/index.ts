function handleLoad(): void {
  getUserByCookie();
}

async function handleRegister(ev: any) {
  ev.preventDefault();
  try {
    const email = ev.target.email.value;
    const password = ev.target.password.value;

    console.log(email, password);
    //@ts-ignore
    const { data } = await axios.post("/users/register", {
      email,
      password,
    });
    const { register, error } = data;
    console.log(data);
    if (error) throw error;
 
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
    const email = ev.target.email.value;
    const password = ev.target.password.value;

    console.log(email, password);
    //@ts-ignore
    const { data } = await axios.post("/users/login", {
      email,
      password,
    });
    console.log(data);
    const { login, userId, error } = data;
    console.log(userId);
    if (error) throw error;

    if (login && userId) {
      window.location.href = `./profile.html?userId=${userId}`;
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
    console.log(user)
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

