let axios;
console.log("Connected!");

async function handleRegister(e: any) {
  e.preventDefault();
  try {
    let { email, password } = e.target.elements;
    email = email.value;
    password = password.value;

    const { data } = await axios.post("users/register", { email, password });
    const { user, error } = data;
   
    console.log(error);
    if (error && error.includes("E11000")) alert("This email is already in use");

    console.log('the User is:', user);
    console.log("the User_id is:", user._id);
    console.log("the Data is:", data);
    // e.target.reset();

  } catch (error) {
    console.error(error);
  }
}


async function handleLogin(e: any) {
  e.preventDefault();
  try {
    let { email, password } = e.target.elements;
    email = email.value; 
    password = password.value;

    const { data } = await axios.post("/users/login", {email, password});
    const { user, login, error, entrances } = data;
    console.log(user);
    console.log(entrances);
    console.log("This is the logged in User:", user);
    console.log("This is the logged in Data:", data);
    // e.target.reset();

    if (login) {
      window.location.href = './item.html';  
    } else {
      alert("Username or password is incorrect");
    }

  } catch (error) {
    console.error(error);
  }
}


