
interface User{
  username:string;
  id:string;
}
const users:Array<User>=[
  {username:'Moshe', id:uid()},
  {username:'Miriam,', id:uid()},
]

export async function getAllUsers(req, res) {
  try {


    res.send({ ok: true, users });
} catch (error) {
    console.log(error.error);
    res.send({ error: error.message });
}
}
export function uid(){
  let uid=''
    uid=
    Date.now().toString(32) +
      Math.random().toString(16)
      return uid
  
}