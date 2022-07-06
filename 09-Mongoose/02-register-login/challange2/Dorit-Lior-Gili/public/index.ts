console.log(`connect`)


function handleEditUserProfile(user) {
    try {
        window.location.href = `./editProfile.html?userId=${user._id}`;
    } catch (error) {
        console.error(error);
    }
}
async function handleRegister(ev){
  console.log("handleRegister")
  ev.preventDefault();
  let email = ev.target.email.value
  let password = ev.target.password.value
  let ifFirstLogin=true
  console.log(email,password)
  try{
      //@ts-ignore
      const {data} = await axios.post("/user/user-register",{email, password}) 
      const {register, user, error} = data
      console.log(user)
      if (register){
       if(user.ifFirstLogin) {
        handleEditUserProfile(user)
       }
      }
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
  let email = ev.target.email.value
  let password = ev.target.password.value
  console.log(email,password)
  try {
      //@ts-ignore
      const {data} = await axios.post("/user/user-login",{email,password})
      console.log(data)
      const {user, error} = data
      if (error){
          throw new Error("user not found please register first")
      }
      console.log(user)
      const userId = user._id
      console.log(`userID after retrieving from user client ${userId}`)
      if (user.ifFirstLogin){
        handleEditUserProfile(user)
      }else{
          window.location.href= `./home.html?userId=${userId}`
      }
   } catch (error) {
     console.error(error) 
  }
}

