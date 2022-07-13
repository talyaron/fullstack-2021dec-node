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
    let { email, password } = e.target.elements;
    email = email.value;
    password = password.value;

    const { data } = await axios.post("/users/login", {
      email,
      password,
    });
    const { user, login, error } = data;
    console.log(user);
    console.log("This is the logged in USER", user);

    console.log("This is the logged in DATA", data);

    if (login) {
      window.location.href = `./user.html?userId=${user._id}&name=itizik&age=234`;
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
    console.log(urlParams)
    const userId = urlParams.get("userId");
    const age = urlParams.get("age");
    console.log(age);

    return userId;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function onscondPageLoad() {
  try {
    //get params of userId
    const userId = getUserId();

    if (!userId) throw new Error("couldnt find user id in url");

    const { data } = await axios.get(`/users/get-user?userId=${userId}`);

    const { error, user } = data;
    if (error) throw error;
    console.log(user);
    const { name } = user;

    const userName = document.querySelector("#userName");
    userName.innerHTML = `<h1>Welcome  ${name}</h1>`;

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
