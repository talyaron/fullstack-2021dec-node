async function handleRegister(ev: any) {
  ev.preventDefault();
  try {
    const email = ev.target.email.value;
    const password = ev.target.password.value;

    console.log(email, password);
    //@ts-ignore
    const { data } = await axios.post("/users/register", {email, password });
    const { register, error } = data;
    if (error) throw error;
    console.log(data);
    if( error && error.includes("E11000")) alert ('email is already in use')
  } catch(error){
    console.error(error)
  }

}

async function handleLogin(ev: any) {
    ev.preventDefault();
    try {
      const name = ev.target.name.value;
      const email = ev.target.email.value;
      const password = ev.target.password.value;
      
  
      console.log(name, email, password);
      //@ts-ignore
      const { data } = await axios.post("/users/login", { name, email, password });
      const { login, error } = data;
      if(error) throw error;

      if(login){
        //redirect to a second page
        window.location.href= './home.html'
      }
 
 if(error) throw error;
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  
