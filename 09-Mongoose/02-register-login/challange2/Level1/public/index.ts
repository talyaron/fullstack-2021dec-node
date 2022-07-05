

async function handleRegister(ev) {
    ev.preventDefault();
    try {
        let email = ev.target.email.value;
        let password = ev.target.password.value;
        let name = ev.target.name.value;
        let age = ev.target.age.value;
        let img = ev.target.img.value;

        console.log(email,password,name,age,img);
        //@ts-ignore
        const {data} = await axios.post("/users/register", {email,password,name,age,img})
        const {register,error} = data;
        console.log(error);

        if (error && error.includes("E11000")) alert("Email already exists");
        console.log(data);
    } catch (error) {
        console.error(error);
        
    }
  }

  async function handleLogin(ev) {
    ev.preventDefault();
    try {
        let { email, password } = ev.target.elements;
        email = email.value;
        password = password.value;
        // let password = ev.target.password.value;
        console.log(email,password);
        //@ts-ignore
        const {data} = await axios.post("/users/login", {email,password})
        const {user,login,error} = data;

        
        console.log(error);

        if (login) {
            window.location.href = `./user.html?userId=${user._id}`;
          }
        if(error) throw error;
        console.log(data);
        

 
    } catch (error) {
        console.error(error);
        
    }
}


function getUserById(): String | false{
try {
    const queryString = window.location.search;
    console.log(queryString);

    const urlParams =new URLSearchParams(queryString);
    console.log(urlParams);

    const userId = urlParams.get("userId")
    console.log(userId);
    
    

} 
catch (error) {
    console.error(error);
    return false;}
}


async function onscondPageLoad() {
    try {
      //get params of userId
      const userId = getUserById();
  
      if (!userId) throw new Error("couldnt find user id in url");
  //@ts-ignore
      const { data } = await axios.get(`/users/get-user?userId=${userId}`);
  
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