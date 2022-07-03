async function handleLogin(event: any): Promise<void>{
  event.preventDefault();
  try{
    const email = event.target.email.value;
    const password = event.target.password.value;
    
    console.log(email, password);
  //@ts-ignore
  const { data } = await axios.post("/user/login", {email, password });
  console.log(data);
  const {user, login, error} = data;

  if(user){
      window.location.href = "../public/main.html";
  }

  if (login) {
    window.location.href = `./main.html`;
  }

  if(!login){
    throw new Error('User not found');
  }

  } catch (error) {
      console.error(error)
  }
}


async function handleRegister(event: any){
  event.preventDefault();
  try {
  const email = event.target.email.value;
  const password = event.target.password.value;
  console.log(email, password)
  // console.dir(email,password)
  //@ts-ignore
  const { data } = await axios.post("/user/register", { email, password });
  const { register, error } = data;
  console.log(register)
  console.log(error);
  if (error && error.includes("E11000")) alert("Email is allerady in use");
  console.log(data);
  event.target.reset();
} catch (error) {
  console.error(error)
}   
}



function getUserId(): string | false {
  try {
    const queryString = window.location.search;
    console.log(queryString);

    const urlParams = new URLSearchParams(queryString);
    console.log(urlParams)
    
    const name = urlParams.get("name");
    console.log(name);

    return name;
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
    // @ts-ignore
    const { data } = await axios.get(`/user/get-user?userId=${userId}`);

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