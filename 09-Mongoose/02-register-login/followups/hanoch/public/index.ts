async function handleUserReg(ev){
    ev.preventDefault()
    try {
        const name = ev.target.name.value;
        const email = ev.target.email.value;
        const password = ev.target.password.value;

        const {data} = await axios.post('/user/register', {name, email, password});
        const {register, error} = data;

        console.log(register);
        
        
        if( error && error.includes("E11000")) alert ('email is already in use')



    } catch (error) {
       console.log(error);
        
    }
}

async function handleUserLogin(ev){
    ev.preventDefault()
    try {
        const name = ev.target.name.value;
        const email = ev.target.email.value;
        const password = ev.target.password.value;

        const {data} = await axios.post('/user/login', {name, email, password});
        const {login, error} = data;
        console.log(data);
        

        if(error) throw error;
        if(login){
            window.location.href= `./home.html?name=${name}`
        }


    } catch (error) {
       console.log(error);
        
    }
}

export function getUserId(): string | false {
    try {
      const queryString = window.location.search;
      console.log(queryString);
  
      const urlParams = new URLSearchParams(queryString);
  
      const name = urlParams.get("name");
      console.log(name);
      return name;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  function welcome(){
    try {
        const name = getUserId()

        const welcome = document.querySelector('#welcome')
        welcome.innerHTML = `<h1>welcome ${name}</h1>`
    } catch (error) {
        console.log(error);
        
    }
  }