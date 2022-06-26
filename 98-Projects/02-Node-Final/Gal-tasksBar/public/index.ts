
async function handleLogin(event: any): Promise<void>{
  try{
  event.preventDefault();
  let { email, password } = event.target.elements;
  email = email.value;
  password = password.value;
  
  //@ts-ignore
  const { data } = await axios.post("/users/login", { username, password });
  console.log(data);
  const {user} = data;
  if(!user){
      throw new Error('User not found');
  }
  if(user){
      window.location.href = "../public/main.html";
  }

  } catch (error) {
      console.error(error)
  }
}



async function handleRegister(event: any): Promise<void>{
  event.preventDefault();
  try {
  const email = event.value.email;
  const password = event.value.password;
  console.log(email, password)
  //@ts-ignore
  const { data } = await axios.post("/users/register", { email, password });
  const { register, error } = data;
  console.log(error);
  if (error && error.includes("E11000")) alert("Email is allerady in use");
  console.log(data);
} catch (error) {
  console.error(error)
}   
}



