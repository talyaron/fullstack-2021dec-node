import uid from '../helpers';

export interface User {
	name: string;
	userId: string;
}

let users: Array<User> = [ { name: 'Mario', userId: 'abc' }, { name: 'Rayu', userId: 'abcd' } ];

export const handleDeleteUser = (req, res) => {
	try {
		const { userId } = req.body;
		const index: number = users.findIndex((user) => user.userId === userId);
		if (index === -1) throw new Error('user not found');
		users = users.filter((user) => user.userId !== userId);
		console.log('users', users);
		res.send({ users });
	} catch (error) {
		res.send({ error: error.message });
	}
};

export const handleAddUser = (req, res) => {
	try {
		const { username } = req.body;
		// console.log(req.body);
		if (!username) throw new Error('name is required');
		const user: User = { name: `${username}`, userId: uid() };
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
		const { userId, newName } = req.body;
		if (!newName) throw new Error('name is required');
		users.forEach((user) => {
			console.log(typeof user.userId);
			if (user.userId === String(userId)) {
				user.name = newName;
			}
		});
		res.send(users);
	} catch (error) {
		console.error(error);
		res.send({ error: error.message });
	}
};

export function getUser(req, res) {
	try {
		const { userId } = req.body;
		if (!userId) throw new Error('userId is missing');
		const user = users.find((user) => user.userId === userId);
		if (!user) throw new Error('couldnt find user');
		res.send({ user });
	} catch (error) {
		console.error(error);
		res.send({ error: error.message });
	}
}
