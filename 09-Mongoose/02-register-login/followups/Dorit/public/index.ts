
async function handleRegister(ev){
    console.log("handleRegister")
    ev.preventDefault();
    let name = ev.target.name.value
    let email = ev.target.email.value
    let password = ev.target.password.value
    console.log(name,email,password)
    try{
        //@ts-ignore
        const {data} = await axios.post("/users/user-register",{name,email,password}) 
        const {register, error} = data
        if (register) alert("welcome")
        if (error) {
            throw new Error("not registered")
        }   
    }catch(error){
        console.error(error)
    }    
}

async function handleLogin(ev){
    console.log("handleLogin")
    ev.preventDefault();
    let name=ev.target.name.value
    let email = ev.target.email.value
    let password = ev.target.password.value
    console.log(name,email,password)
    try {
        //@ts-ignore
        const {data} = await axios.post("/users/user-login",{name,email,password})
        console.log(data)
        const {login, error} = data
        if(login) alert("we found the user")
        if (error){
            throw new Error("user not found please register first")
        }

        console.log("location")
        window.location.href= `./home.html?name=${name}`

        
    } catch (error) {
       console.error(error) 
    }

}

function welcome(){
    console.log("welcome")
    try {
        const name = getUserId()
        console.log(name)
        const welcome = document.querySelector('#welcome')
        welcome.innerHTML = `<h1>welcome ${name}</h1>`
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