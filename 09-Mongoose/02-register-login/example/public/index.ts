async function handleRegister(ev: any) {
  ev.preventDefault();
  try {
    const email = ev.target.email.value;
    const password = ev.target.password.value;

    console.log(email, password);
    //@ts-ignore
    const { data } = await axios.post("/users/register", { email, password });
    const { register, error } = data;
    console.log(error);
    if (error && error.includes("E11000")) alert("Email is allerady in use");
    console.log(data);
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
      const { data } = await axios.post("/users/login", { email, password });
      const { login, error } = data;
      if(error) throw error;

      if(login){
        //redirect to a ssocnd page
        window.location.href= './home.html'
      }
 
 if(error) throw error;
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  
