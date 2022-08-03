let axios;
console.log("Connected!");

async function handleRegister(e) {
  e.preventDefault();
  try {
    let { email, password } = e.target.elements;
    email = email.value;
    password = password.value;

    const { data } = await axios.post("users/register", { email, password });
    const { user, error } = data;
   
    console.log(error);
    if (error && error.includes("E11000")) alert("email is already in use");

    console.log(user);
    console.log(user._id);
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
      window.location.href = `./user.html?userId=${user._id}`;  
    } else {
      alert("username or password is incorrect");
    }

  } catch (error) {
    console.error(error);
  }
}


async function getUserByCookie() {
  try {  
    const { data } = await axios.get("/users/user-by-cookie");
    const { user} = data;
    if (!user) throw new Error("User not found");

    console.log("This user from getUserByCookie:", user);
    console.log("This Data from getUserByCookie:", data);
    
    const { email, entrances } = user;

    const root = document.querySelector("#root");
    root.innerHTML = `<div><h1> ${email} <br> Entrances: ${entrances/120}</h1></div>`;

  } catch (error) {
    console.error(error);
  }
}


