async function handleLogin(ev: any) {
    try {
      ev.preventDefault();
      const password = ev.target.elements.password.value;
      const email = ev.target.elements.email.value;
      console.log(password, email);
  
       //@ts-ignore
       const { data } = await axios.post("/users/login", { password, email });
       console.log(data);
       const {ok} = data;
       if(ok){
          window.location.href= './products.html'
       }
    } catch (error) {
      console.error(error);
    }
  }
  
  async function handleRegister(ev: any) {
    try {
      ev.preventDefault();
      const password = ev.target.elements.password.value;
      const email = ev.target.elements.email.value;
      console.log(password, email);
  
      //@ts-ignore
      const { data } = await axios.post("/users/register", { password, email });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  