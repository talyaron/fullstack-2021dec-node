let axios;
console.log("Connected!");

async function handleRegister(e) {
  e.preventDefault();
  try {
    let { email, name, password } = e.target.elements;
    email = email.value;
    name = name.value;
    password = password.value;

    const { data } = await axios.post("users/register", {
      email,
      name,
      password,
    });
    const { result, error } = data;
    console.log(result);
    console.log(name);
    console.log(error);

    if (error && error.includes("E11000")) alert("email is already in use");
    console.log(data);
    e.target.reset();
  } catch (error) {
    console.error(error);
  }
}

async function handleLogin(e) {
  e.preventDefault();
  try {
    let { email, name, password } = e.target.elements;
    email = email.value;
    name = name.value;
    password = password.value;

    const { data } = await axios.post("/users/login", {
      email,
      name,
      password,
    });
    const { user, login, error } = data;

    console.log("This is the logged in USER", user);
    console.log("This is the logged in NAME", name);
    console.log("This is the logged in DATA", data);

    if (login) {
      window.location.href = `./user.html?name=${name}`;
    }
  } catch (error) {
    console.error(error);
  }
}

function getUserId(): string | false {
  try {
    const queryString = window.location.search;
    console.log(queryString);

    const urlParams = new URLSearchParams(queryString);

    const name = urlParams.get("name");
    console.log(name);

    return name;
  } catch (error) {
    console.error(error);
    return false;
  }
}

function toUserPage() {
  try {
    const name = getUserId();
    const userName = document.querySelector("#userName");
    userName.innerHTML = `<h1>Welcome  ${name}</h1>`;
  } catch (error) {
    console.log(error);
  }
}






