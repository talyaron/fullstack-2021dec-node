import uid from '../helpers';

export interface user{
    username: string,
    email: string,
    uid: string,
    password: string
};
let users: Array<user> = [ 
    { username: 'Mario', uid: 'abc', email: "galgross24@gmail.com",password: "Aa12345" }, 
    { username: 'Rayu', uid: 'abcd',email: "galgross23@gmail.com",password: "Bb12345" }, 
];

export const handleDeleteUser = (req, res) => {
	try {
		const { uid } = req.body;
		const index: number = users.findIndex((user) => user.uid === uid);
		if (index === -1) throw new Error('user not found');
		users = users.filter((user) => user.uid !== uid);
		console.log('users', users);
		res.send({ users });
	} catch (error) {
		res.send({ error: error.message });
	}
};

export const handleAddUser = (req, res) => {
	try {
		const { username,
                email,
                password } = req.body;
                if (!username)
                throw new Error("User name is required");
            if (!email)
                throw new Error("Email is required");
            if (!email)
                throw new Error("uniqID is required");
            if (!password)
                throw new Error("Permissions are required");
                
        const user: user = {
            username,
            email,
            uid: uid(),
            password
        };

		users.push(user);
		res.send(users);
	} catch (error) {
		console.error(error);
		res.send({ error: error.message });
	}
};

export async function getAllUsers(req, res) {
	try {
		res.send({ users });
	} catch (error) {
		console.log('Users array not valid');
		res.send({ error: error.message });
	}
}
export const updateUser = async (req, res) => {
    try {
        const {
            username,
            email,
            uid,
            password
        } = req.body;

        const userIndex = users.findIndex(user => user.uid === uid);
        if (userIndex === -1)
            throw new Error("user not found");

        users[userIndex].username = username;
        users[userIndex].email = email;
        users[userIndex].password = password;

        res.send({
            users
        });

    } catch (error) {
        res.send({
            error: error.message
        });
    }
};

export function getUser(req, res) {
	try {
		const { uid } = req.body;
		if (!uid) throw new Error('uid is missing');
		const user = users.find((user) => user.uid === uid);
		if (!user) throw new Error('couldnt find user');
		res.send({ user });
	} catch (error) {
		console.error(error);
		res.send({ error: error.message });
	}
}
