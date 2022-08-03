import User from "../model/usersModel";

interface User{
  username:string;
  id:string;
}
const users:Array<User>=[
  {username:'Moshe', id:'dgdsg'},
  {username:'Miriam,', id:'dgdsdghghg'},
]

export async function getAllUsers(req,res){
    try {
        res.send({ ok: true, users });
    } catch (error) {
        console.log(error.error);
        res.send({ error: error.message });
    }
}