
async function handleLogin(event: any): Promise<void>{
  event.preventDefault();
  try{
    const email = event.target.email.value;
    const password = event.target.password.value;
    
    console.log(email, password);
  //@ts-ignore
  const { data } = await axios.post("/users/login", { email, password });
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



async function handleRegister(event: any){
  event.preventDefault();
  try {
  const email = event.target.email.value;
  const password = event.target.password.value;
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



