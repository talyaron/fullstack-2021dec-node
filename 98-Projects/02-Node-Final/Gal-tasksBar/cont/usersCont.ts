// import uid from './helpers';
import User from "../models/models";

export const getUsers= async (req,res)=>{
    const users= await User.find({})
    console.log(users)
}

export interface User{
    username: string,
    email: string,
    password: string
};

export let users: Array<User> = [];

export const handleRegister = async (req, res) => {
	try {
		const { 
                email,
                password } = req.body;
          
            if (!email)
                throw new Error("Email is required");
            if (!password)
                throw new Error("Permissions are required");
                
        const user = new User ({
            
            email,
            password
        });
        await user.save()
        res.send({ok: true, user})
	} catch (error) {
		console.error(error);
		res.send({ error: error.message });
	}
};

export const handleLogin =async (req:any, res:any) => {
    try {
        let {email, password} = req.body;
        const user = await User.findOne({email});
        if (user){
            if(user.password === password){

                res.cookie('user',user._id);
                res.send({ok:true,user})
    }else{
        throw new Error("password not match to user")
    }
        }else{
            throw new Error("user not found");
        }

    } catch (error) {
        console.error(error);
		res.send({ error: error.message });
    }
}

export const getUserByCookie = (req,res)=>{
    try {
        const {user} = req.cookies;
        console.log(user);
        res.send({ok:true,user})
    } catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}


export const updateUser = async (req, res) => {
    try {
      const { email, newName } = req.body;
      const index = users.findIndex(object => {return object.email === String(email)})
      users[index].email = newName
      
      res.send({ users });
  
    } catch (error) {
      res.send({ error: error.message });
    }
  };


export const handleDelete = async (req, res) => {
	try {
        const {id}= req.body;
        if(id){
            await User.findByIdAndDelete(id) 
            res.send({ok:true});
        }
		// res.send({ users });
	} catch (error) {
		res.send({ error: error.message });
	}
};


export const handleAddUser = (req, res) => {
    const { email,password } = req.body;
    if (!email || !password) throw new Error("email is required");
  
    const user: User = {
        email, password,
        username: ""
    };
    users.push(user);
    res.send(users);
  };

  // export const searchUsers = async (req,res)=>{
//     try {
        
//     }  catch (error) {
//         res.send({
//             error: error.message
//         });


// getUser func without DB:
// export function getUser(req, res) {
// 	try {
// 		const { uid } = req.body;
// 		if (!uid) throw new Error('uid is missing');
// 		const user = users.find((user) => user.uid === uid);
// 		if (!user) throw new Error('couldnt find user');
// 		res.send({ user });
// 	} catch (error) {
// 		console.error(error);
// 		res.send({ error: error.message });
// 	}
// }