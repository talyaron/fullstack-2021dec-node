//import User from "../Model/usersModel"

export interface User {
    userName: string;
    userId: string;
  }

  let users: Array<User> = [
    { userName: "Guy", userId: uid() },
    { userName: "Rivka", userId: uid() },
  ];
export const getUsers=(req,res)=>{
    try{
        res.send({users})
        
    }catch(error){
        res.send({error: error.message});
    }   
    
}

function uid() {
    return Date.now().toString(36) + Math.random().toString(36)
  };