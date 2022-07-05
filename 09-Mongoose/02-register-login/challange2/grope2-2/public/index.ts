let axios;
console.log("Connected!");

async function handleRegister(e) {
  e.preventDefault();
  try {
    let { email, password } = e.target.elements;
    email = email.value;
    password = password.value;

    const { data } = await axios.post("users/register", {
      email,
      password,
    });
    const { result, register, error } = data;
    console.log(result);
    console.log(result._id);

    if (error && error.includes("E11000")) alert("email is already in use");
    console.log(data);
    e.target.reset();

    window.location.href = "./login.html";

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

    const { data } = await axios.post("/users/login", {email, password});
    const { user, login, error } = data;
    console.log(user);
    console.log("This is the logged in USER", user);
    console.log("This is the logged in DATA", data);
    e.target.reset();

    if (login) {
      window.location.href = `./profile.html?userId=${user._id}`;
    }
  } catch (error) {
    console.error(error);
  }
}

async function handleSubmit(e) {
  e.preventDefault();
  try {
    let {name, age, url} = e.target.elements;
    name = name.value;
    age = age.valueAsNumber;
    url = url.value;

    const { data } = await axios.post("/users/submit", { name, age, url });
    const { error, profile } = data;

    console.log("This is the logged in DATA", data);  
    console.log("This is the PROFILE", profile);
    console.log("This is the NAME", name);
    console.log("This is the AGE", age);
    console.log("This is the URL", url);
    e.target.reset();

    window.location.href = `./user.html?userId=${profile._id}`;

  } catch (error) {
    console.error(error);
  }
}

async function toUpdateFormBtn() {
  const userId = getUserId();
  const { data } = await axios.get(`/users/get-user?userId=${userId}`);
  const { error, user } = data;

  console.log("user", user);
  console.log("userId", userId);
  toNextPage();
  window.location.href = `./profile.html?userId=${user._id}`;
}

async function handleUpdate(e) {
  e.preventDefault();
  try { 
    const { data } = await axios.patch("/users/update");
    const { error, profile } = data;

    console.log("This is the logged in DATA", data);
    console.log("This is the PROFILE", profile);

    window.location.href = `./user.html?userId=${profile._id}`;

  } catch (error) {
    console.error(error);
  }
}


async function toNextPage() {
  try {
    const userId = getUserId();

    if (!userId) throw new Error("couldnt find user id in url");

    const { data } = await axios.get(`/users/get-user?userId=${userId}`);

    const { error, user } = data;
    if (error) throw error;

    console.log("user", user);
    console.log("userId", userId);
    const { name, age, url } = user;

    console.log(name, age, url);

    const userName = document.querySelector("#userName");
    let html = "";
    html += `
        <div class="user">
          <h1> ${name} </h1>
          <h1> ${age} years old </h1>
          <img src="${url}">
          <button class="UpdateInfo" onclick="toUpdateFormBtn()">To update info</button>
          </div>
        `;
    userName.innerHTML = html;
    console.log(data);
  } catch (error) {
    console.error(error);
  }

  //  https://static5.depositphotos.com/1003995/495/i/600/depositphotos_4953129-stock-photo-golden-retriever-stick-its-tongue.jpg
  // https://nationaltoday.com/wp-content/uploads/2020/02/national-golden-retriever-day-640x514.jpg

  // https://tricycle.org/wp-content/uploads/2009/09/Maha-Ghosananda-1.jpg
  // https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Ghosanda_de_Camboya.JPG/250px-Ghosanda_de_Camboya.JPG
}

function getUserId(): string | false {
  try {
    const queryString = window.location.search;
    console.log(queryString);

    const urlParams = new URLSearchParams(queryString);
    const userId = urlParams.get("userId");

    console.log(userId);

    return userId;
  } catch (error) {
    console.error(error);
    return false;
  }
}


