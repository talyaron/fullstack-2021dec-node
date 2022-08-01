function handleLoad(): void {
  getUserByCookie();
}

async function handleRegister(ev: any) {
  ev.preventDefault();
  try {
    const email = ev.target.email.value;
    const password = ev.target.password.value;
    const name = ev.target.name.value;
    console.log(email, password);
    //@ts-ignore
    const { data } = await axios.post("/users/register", {
      email,
      password,
      name,
    });
    const { register, error, userId } = data;
    console.log(data);
    if (error) throw error;

    if (register && userId) {
      window.location.href = `./profile.html?userId=${userId}`;
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
    const { userDB, error } = data;
    console.log(userDB);
    if (error) throw error;

    if (userDB.role === "admin") {
      window.location.href = `./admin.html?userId=${userDB._id}`;
    } else {
      window.location.href = `./profile.html?userId=${userDB._id}`;
    }

    if (error) throw error;
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

async function handleSaveInfo(ev) {
  ev.preventDefault();
  try {
    //@ts-ignore
    const { data } = await axios.post("/users/SaveInfo", {});
    const { user, error } = data;
    console.log(user);
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
